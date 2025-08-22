'use client';

import { editProduct } from '@/app/actions/products';
import { FormState } from '@/app/products-db-create/page';
import { useActionState } from 'react';
import { Product } from '../page';

const ProductEditForm = ({ product }: { product: Product }) => {
  const initialState: FormState = {
    errors: {},
  };

  const editProductWithId = editProduct.bind(null, product.id);

  const [state, formAction, isPending] = useActionState(
    editProductWithId,
    initialState
  );

  return (
    <form className="p-4 space-y-4 max-w-96" action={formAction}>
      <div>
        <label>
          Title
          <input
            type="text"
            name="title"
            className="block w-full p-2 border rounded"
            defaultValue={product?.title}
          />
        </label>
        {state.errors.title && (
          <p className="text-red-500">{state.errors.title}</p>
        )}
      </div>
      <div>
        <label>
          Price
          <input
            type="number"
            name="price"
            className="block w-full p-2 border rounded"
            defaultValue={product?.price}
            step={100}
          />
        </label>
        {state.errors.price && (
          <p className="text-red-500">{state.errors.price}</p>
        )}
      </div>
      <div>
        <label>
          Description
          <textarea
            name="description"
            className="block w-full p-2 border rounded"
            defaultValue={product?.description || ''}
          />
        </label>
        {state.errors.description && (
          <p className="text-red-500">{state.errors.description}</p>
        )}
      </div>

      <button
        type="submit"
        className="block w-full p-2 text-white bg-blue-500 rounded disabled:bg-gray-500 mt-4"
        disabled={isPending}
      >
        Update
      </button>
    </form>
  );
};

export default ProductEditForm;
