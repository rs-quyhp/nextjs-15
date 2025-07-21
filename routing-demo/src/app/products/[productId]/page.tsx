import { notFound } from 'next/navigation';

const ProductDetails = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const productId = (await params).productId;

  if (Number(productId) > 1000) {
    notFound();
  }

  return <h1>Product Details: {productId}</h1>;
};

export default ProductDetails;
