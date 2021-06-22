const { ApolloClient } = require('apollo-client');
const fetch = require('node-fetch');
const createHttpLink = require('apollo-link-http').createHttpLink;
const InMemoryCache = require('apollo-cache-inmemory').InMemoryCache;

const sushiClient = new ApolloClient({
  link: createHttpLink({
    uri: 'https://api.thegraph.com/subgraphs/name/sushiswap/matic-exchange',
    fetch,
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
});

const comethClient = new ApolloClient({
  link: createHttpLink({
    uri: 'https://api.thegraph.com/subgraphs/name/cometh-game/comethswap',
    fetch,
  }),
  cache: new InMemoryCache(),
});

const quickClient = new ApolloClient({
  link: createHttpLink({
    uri: 'https://api.thegraph.com/subgraphs/name/sameepsi/quickswap06',
    fetch,
  }),
  cache: new InMemoryCache(),
});

const polyzapClient = new ApolloClient({
  link: createHttpLink({
    uri: 'https://api.thegraph.com/subgraphs/name/polyzap/exchange',
    fetch,
  }),
  cache: new InMemoryCache(),
});

const spookyClient = new ApolloClient({
  link: createHttpLink({
    uri: 'https://api.thegraph.com/subgraphs/name/eerieeight/spookyswap',
    fetch,
  }),
  cache: new InMemoryCache(),
});

const spiritClient = new ApolloClient({
  link: createHttpLink({
    uri: 'https://api.thegraph.com/subgraphs/name/layer3org/spiritswap-analytics',
    fetch,
  }),
  cache: new InMemoryCache(),
});

const cakeClient = new ApolloClient({
  link: createHttpLink({
    uri: 'https://bsc.streamingfast.io/subgraphs/name/pancakeswap/exchange-v2',
    fetch,
  }),
  cache: new InMemoryCache(),
});

const apeClient = new ApolloClient({
  link: createHttpLink({
    uri: 'https://graph2.apeswap.finance/subgraphs/name/ape-swap/apeswap-subgraph',
    fetch,
  }),
  cache: new InMemoryCache(),
});

const beefyClient = new ApolloClient({
  link: createHttpLink({
    uri: 'https://api.thegraph.com/subgraphs/name/pajeon/beefyfinance',
    fetch,
  }),
  cache: new InMemoryCache(),
});

module.exports = {
  sushiClient,
  comethClient,
  quickClient,
  polyzapClient,
  spookyClient,
  spiritClient,
  cakeClient,
  apeClient,
  beefyClient,
};
