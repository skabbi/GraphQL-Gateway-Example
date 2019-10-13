
const resolvers = {
  Review: {
    message: (review) => {
      return review.message;
    },
    rating: (review) => {
      return review.rating;
    }
  }
};

module.exports = {
  resolvers,
}