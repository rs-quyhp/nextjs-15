'use client';

import { SubmitButton } from '../components/submit';
import { useActionState } from 'react';
import { createProduct } from '../actions/products';

export type Errors = {
  title?: string;
  price?: string;
  description?: string;
};

export type FormState = {
  errors: Errors;
};

const ProductPageCreate = () => {
  const initialState: FormState = {
    errors: {},
  };

  const [state, formAction, isPending] = useActionState(
    createProduct,
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
        Submit
      </button>
    </form>
  );
};

export default ProductPageCreate;
