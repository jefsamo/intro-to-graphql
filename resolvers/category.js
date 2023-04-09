const { db } = require("../data");

exports.Category = {
  products: (parent, { filter }, context, info) => {
    const categoryProducts = db.products.filter(
      (product) => product.categoryId === parent.id
    );

    let filteredCategoryProducts = categoryProducts;
    if (filter) {
      if (filter.onSale) {
        filteredCategoryProducts = filteredCategoryProducts.filter(
          (product) => product.onSale
        );
      }
    }
    return filteredCategoryProducts;
  },
};
