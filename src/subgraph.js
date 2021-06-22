const { ApolloClient } = require('apollo-client');
const fetch = require('node-fetch');
const createHttpLink = require('apollo-link-http').createHttpLink;
const InMemoryCache = require('apollo-cache-inmemory').InMemoryCache;
const gql = require('graphql-tag');

const getVaultAccountHoldersQuery = async lastId => {
  const beefyClient = new ApolloClient({
    link: createHttpLink({
      uri: 'https://api.thegraph.com/subgraphs/name/pajeon/beefyfinance',
      fetch,
    }),
    cache: new InMemoryCache(),
  });

  const tokensQuery = `
    query vaults( $lastIdString : String) {
        vaults {
          id
          underlyingToken{
            name,
            symbol,
            address
          },
          shareToken{
            name,
            symbol,
            address
          },
          balances(first:1000, orderBy: id, orderDirection: asc, where:{ id_gt: $lastIdString }) {
            account{
              id
            }
          }
          
        }
    }
  `;

  const response = beefyClient.query({
    query: gql(tokensQuery),
    variables: { lastIdString: lastId },
  });

  return response;
};

var vaultsObject = async () => {
  let accountCounter = 0;
  let data = await getVaultAccountHoldersQuery((lastIdString = ''));

  let vaults = data.data.vaults[0];

  console.log(
    vaults.id,
    vaults.underlyingToken.name,
    vaults.shareToken.name,
    vaults.shareToken.address
  );

  let balances = vaults.balances;
  let additionalAccountLength = balances.length;

  accountCounter += additionalAccountLength;

  let lastId = balances[999].account.id;

  while (additionalAccountLength == 1000) {
    let recursiveData = await getVaultAccountHoldersQuery((lastIdString = lastId));

    vaults = recursiveData.data.vaults[0];

    balances = vaults.balances;
    additionalAccountLength = balances.length;

    accountCounter += additionalAccountLength;

    console.log(accountCounter, additionalAccountLength);
    lastId = balances.pop().account.id;
    console.log(lastId);
  }

  console.log(accountCounter);
};

vaultsObject();
