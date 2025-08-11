import { Suspense } from 'react';
import { Product } from '../components/product';
import { Reviews } from '../components/reviews';

const ProductReviewPage = () => {
  return (
    <div>
      <h1>Product reviews</h1>
      <Suspense fallback={<div>Loading product . . . </div>}>
        <Product />
      </Suspense>
      <Suspense fallback={<div>Loading reviews . . . </div>}>
        <Reviews />
      </Suspense>
    </div>
  );
};

export default ProductReviewPage;
