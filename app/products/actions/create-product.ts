'use server';

import { API_URL } from '@/app/common/constants/api';
import { getHeaders, post } from '@/app/common/utils/fetch';
import { revalidateTag } from 'next/cache';

export default async function createProduct(formData: FormData) {
  const response = await post('products', formData);
  console.log(formData); // DEBUG
  const productImage = formData.get('image');
  if (productImage instanceof File && !response.error) {
    await uploadProductImage(response.data.id, productImage);
  }
  revalidateTag('products');
  return response;
}

async function uploadProductImage(productId: number, file: File) {
  const formData = new FormData();
  // this is the form key that we're actually applying now from
  // the form data that the user has actually submitted.
  // It's need to correspond to the form data property that we
  // specify in the file interceptor on the backend
  formData.append('image', file);
  await fetch(`${API_URL}/products/${productId}/image`, {
    body: formData,
    method: 'POST',
    headers: getHeaders(),
  });
}
