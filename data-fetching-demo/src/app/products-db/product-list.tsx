'use client';

import Link from 'next/link';
import { Product } from './page';
import { useOptimistic } from 'react';
import { removeProduct } from '../actions/products';

const ProductList = ({ products }: { products: Product[] }) => {
  const [optimisticProducts, setOptimisticProducts] = useOptimistic(
    products,
    (currentProducts, productId) => {
      return currentProducts.filter((product) => product.id !== productId);
    }
  );

  const removeProductById = async (id: number) => {
    setOptimisticProducts(id);
    await removeProduct(id);
  };

  return (
    <ul className="space-y-4 p-4">
      {optimisticProducts.map((product) => (
        <li
          key={product.id}
          className="p-4 bg-white shadow-md rounded-lg -text-gray-700"
        >
          <h2 className="text-xl font-semibold">
            <Link href={`/products-db/${product.id}`}>{product.title}</Link>
          </h2>
          <p>{product.description}</p>
          <p className="text-lg font-medium">${product.price}</p>
          <form action={removeProductById.bind(null, product.id)}>
            <button
              type="submit"
              className="px-4 py-2 mt-4 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-600"
            >
              Delete
            </button>
          </form>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
