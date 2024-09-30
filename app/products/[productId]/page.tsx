import React from 'react';
import getProduct from './get-product';
import { Grid2, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import { getProductImage } from '../product-image';

interface SingleProductProps {
  params: { productId: string };
}

const SingleProduct = async ({ params }: SingleProductProps) => {
  const product = await getProduct(+params.productId);

  return (
    <Grid2 container marginBottom={'2rem'} rowGap={3}>
      {product.imageExists && (
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Image
            src={getProductImage(product.id)}
            width={0}
            height={0}
            className='w-full sm:w-3/4 h-auto'
            sizes='100vw'
            alt='Picture of the product'
          />
        </Grid2>
      )}

      <Grid2 size={{ xs: 12, md: 6 }}>
        <Stack gap={3}>
          <Typography variant='h2'>{product.name}</Typography>
          <Typography>{product.description}</Typography>
          <Typography variant='h4'>${product.price}</Typography>
        </Stack>
      </Grid2>
    </Grid2>
  );
};

export default SingleProduct;
