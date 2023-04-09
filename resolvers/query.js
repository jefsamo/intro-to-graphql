const { db } = require("../data");

exports.Query = {
  hello: () => {
    return ["Hello World!", "Graphql"];
  },
  numberOfAnimals: () => {
    return 23;
  },
  price: () => {
    return 23.34;
  },
  isCool: () => false,
  products: (parent, { filter }, context) => {
    let filteredProducts = db.products;
    if (filter) {
      const { onSale, avgRating } = filter;
      if (onSale) {
        filteredProducts = filteredProducts.filter((product) => product.onSale);
      }
      if ([1, 2, 3, 4, 5].includes(avgRating)) {
        filteredProducts = filteredProducts.filter((product) => {
          let sumRating = 0;
          let numberOfReviews = 0;
          reviews.forEach((review) => {
            if (review.productId === product.id) {
              sumRating += review.rating;
              numberOfReviews++;
            }
          });
          const avgProductRating = sumRating / numberOfReviews;
          return avgProductRating >= avgRating;
        });
      }
    }
    return filteredProducts;
  },
  product: (parent, args, context) => {
    // console.log(context.products);
    return db.products.find((product) => product.id === args.id);
  },
  categories: () => {
    return db.categories;
  },
  category: (_, args, context) => {
    return db.categories.find((category) => category.id === args.id);
  },
};
