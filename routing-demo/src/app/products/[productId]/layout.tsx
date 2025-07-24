import { getRandomInt } from './reviews/[reviewId]/page';

const ProductLayout = ({ children }: { children: React.ReactNode }) => {
  if (getRandomInt() % 2 === 0) {
    throw new Error('Error loading product');
  }

  return (
    <>
      {children}
      <h2>Featured Products</h2>
    </>
  );
};

export default ProductLayout;
