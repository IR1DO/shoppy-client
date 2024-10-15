import React from 'react';
import getProducts from './actions/get-products';
import ProductsGrid from './products-grid';

const Products = async () => {
  const products = await getProducts();

  return <ProductsGrid products={products} />;
};

export default Products;
