const { gql } = require('apollo-server');

const typeDefs = gql`
  type Review {
    message: String,
    rating: Float
  }
`;

module.exports = {
  typeDefs
};