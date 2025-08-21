import { getProduct, getProducts } from '@/prisma-db';

type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};

const ProductPage = async () => {
  const products: Product[] = await getProducts();

  return (
    <ul>
      {products.map((product) => (
        <li>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </li>
      ))}
    </ul>
  );
};

export default ProductPage;
