'use server';

import { addProduct, deleteProduct, updateProduct } from '@/prisma-db';
import { Errors, FormState } from '../products-db-create/page';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

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

export const editProduct = async (
  id: number,
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

  await updateProduct(id, title, Number(price), description);

  redirect('/products-db');
};

export const removeProduct = async (id: number) => {
  await deleteProduct(id);

  revalidatePath('/products-db');
};
