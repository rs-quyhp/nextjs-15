'use server';

import { addProduct } from '@/prisma-db';
import { Errors, FormState } from '../products-db-create/page';
import { redirect } from 'next/navigation';

export const createProduct = async (
  prevState: FormState,
  formData: FormData
) => {
  const title = formData.get('title') as string;
  const price = formData.get('price') as string;
  const description = formData.get('description') as string;

  const errors: Errors = {};

  if (!title) errors.title = 'Title is required';
  if (!price) errors.price = 'Price is required';
  if (!description) errors.description = 'Description is required';

  if (Object.keys(errors).length) return { errors };

  await addProduct(title, Number(price), description);

  redirect('/products-db');
};
