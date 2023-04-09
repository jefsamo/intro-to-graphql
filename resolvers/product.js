const { db } = require("../data");

exports.Product = {
  category: (parent, args, context) => {
    // console.log(context.products);
    return db.categories.find((category) => category.id === parent.categoryId);
  },
  reviews: (parent, args, context) => {
    // console.log(parent);
    return db.reviews.filter((review) => review.productId === parent.id);
  },
};
