import React from 'react';
import getProducts from './actions/get-products';
import Product from './product';
import { Grid2 } from '@mui/material';

const Products = async () => {
  const products = await getProducts();

  return (
    <Grid2 container spacing={3}>
      {products.map((product) => (
        <Grid2 key={product.id} size={{ xs: 12, sm: 6, lg: 4 }}>
          <Product product={product} />
        </Grid2>
      ))}
    </Grid2>
  );
};

export default Products;
