import { getProducts } from '@/prisma-db';
import ProductList from './product-list';

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};

const ProductPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ query: string }>;
}) => {
  const { query } = await searchParams;
  const products: Product[] = await getProducts(query);

  return <ProductList products={products} />;
};

export default ProductPage;
