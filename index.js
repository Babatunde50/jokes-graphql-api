const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const myJokesAPI = require("./datasource/my-jokes");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      myJokesAPI: new myJokesAPI(),
    };
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
