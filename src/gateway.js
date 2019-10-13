const { ApolloServer, gql } = require('apollo-server');
const author = require('./author');
const book = require('./book');
const review = require('./review');

const typeDefs = gql`
  type Query
`;

const server = new ApolloServer({
  typeDefs: [
    typeDefs,
    author.typeDefs,
    book.typeDefs,
    review.typeDefs
  ],
  resolvers: [
    author.resolvers,
    book.resolvers,
    review.resolvers
  ]
});

server.listen(3000).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});