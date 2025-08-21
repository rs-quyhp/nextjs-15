'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const FormCreateProduct = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('react-form/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          price,
          description,
        }),
      });
      console.log('response: ', response);
      if (response.ok) {
        router.push('products-db');
      }
    } catch (err) {
      console.log('Error create product: ', err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4 max-w-96">
      <label>
        Title
        <input
          type="text"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          className="block w-full p-2 border rounded"
        />
      </label>
      <label>
        Price
        <input
          type="number"
          name="price"
          onChange={(e) => setPrice(e.target.value)}
          className="block w-full p-2 border rounded"
        />
      </label>
      <label>
        Description
        <textarea
          name="description"
          onChange={(e) => setDescription(e.target.value)}
          className="block w-full p-2 border rounded"
        />
      </label>
      <button
        type="submit"
        disabled={loading}
        className="block w-full p-2 text-white bg-blue-500 rounded disabled:bg-gray-500 mt-4"
      >
        {loading ? 'Submitting' : 'Submit'}
      </button>
    </form>
  );
};

export default FormCreateProduct;
