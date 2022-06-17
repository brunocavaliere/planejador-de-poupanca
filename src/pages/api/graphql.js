// import { ApolloServer } from "apollo-server-micro";
// import { schema } from "../../apollo/schema";

// const apolloServer = new ApolloServer({
//   schema,
//   context(ctx) {
//     return ctx;
//   },
// });

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// export default apolloServer.createHandler({ path: "/api/graphql" });

import { ApolloServer } from "apollo-server-micro";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { schema } from "../../apollo/schema";
import { resolvers } from "../../apollo/resolvers";

const apolloServer = new ApolloServer({
  schema,
  resolvers,
  playground: true,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

const startServer = apolloServer.start();

export default async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }

  await startServer;

  await apolloServer.createHandler({ path: "/api/graphql" })(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};
