import { getProduct } from '@/prisma-db';
import ProductEditForm from './product-edit-form';
import { notFound } from 'next/navigation';

const EditProductPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const product = await getProduct(Number(id));

  if (!product) notFound();

  return <ProductEditForm product={product} />;
};

export default EditProductPage;
