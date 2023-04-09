exports.Product = {
  category: (parent, args, { db }) => {
    // console.log(context.products);
    return db.categories.find((category) => category.id === parent.categoryId);
  },
  reviews: (parent, args, { db }) => {
    // console.log(parent);
    return db.reviews.filter((review) => review.productId === parent.id);
  },
};
