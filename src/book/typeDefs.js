const { gql } = require('apollo-server');

const typeDefs = gql`
  type Book {
    title: String,
    review: Review
  }
`;

module.exports = {
  typeDefs
};