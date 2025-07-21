import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{ productId: string }>;
}

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const productId = (await params).productId;

  return {
    title: `Product ${productId}`,
    description: `Product ${productId} description`,
  };
};

const ProductDetails = async ({ params }: Props) => {
  const productId = (await params).productId;

  if (Number(productId) > 1000) {
    notFound();
  }

  return <h1>Product Details: {productId}</h1>;
};

export default ProductDetails;
