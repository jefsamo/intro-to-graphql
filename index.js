// npm install @apollo/server graphql
// import { typeDefs, resolvers } from "./schema";
const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const typeDefs = require("./schema");
const { Query } = require("./resolvers/query");
const { Mutation } = require("./resolvers/mutation");
const { Category } = require("./resolvers/category");
const { Product } = require("./resolvers/product");
const { db } = require("./data");

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation,
    Category,
    Product,
  },
});

const startServer = async () => {
  const { url } = await startStandaloneServer(server, {
    context: () => ({
      db,
    }),
    listen: { port: 4000 },
  });
  console.log(`🚀  Server ready at ${url}`);
};

startServer();
