import { addProduct } from '@/prisma-db';
import { redirect } from 'next/navigation';

const ProductPageCreate = () => {
  const createProduct = async (formData: FormData) => {
    'use server';

    const title = formData.get('title') as string;
    const price = formData.get('price') as string;
    const description = formData.get('description') as string;

    await addProduct(title, Number(price), description);

    redirect('/products-db');
  };

  return (
    <form className="p-4 space-y-4 max-w-96" action={createProduct}>
      <label>
        Title
        <input
          type="text"
          name="title"
          className="block w-full p-2 border rounded"
        />
      </label>
      <label>
        Price
        <input
          type="number"
          name="price"
          className="block w-full p-2 border rounded"
        />
      </label>
      <label>
        Description
        <textarea
          name="description"
          className="block w-full p-2 border rounded"
        />
      </label>
      <button
        type="submit"
        className="block w-full p-2 text-white bg-blue-500 rounded disabled:bg-gray-500 mt-4"
      >
        Add Product
      </button>
    </form>
  );
};

export default ProductPageCreate;
