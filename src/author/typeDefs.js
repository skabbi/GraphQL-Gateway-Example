const { gql } = require('apollo-server');

const typeDefs = gql`
  extend type Query {
    authors: [Author]
    author(id: Int): Author
  }

  type Author {
    name: String
    books: [Book]
  }
`;

module.exports = {
  typeDefs
};