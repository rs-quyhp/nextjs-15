import { getProducts } from '@/prisma-db';
import { removeProduct } from '../actions/products';
import ProductList from './product-list';

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};

const ProductPage = async () => {
  const products: Product[] = await getProducts();

  return <ProductList products={products} />;
};

export default ProductPage;
