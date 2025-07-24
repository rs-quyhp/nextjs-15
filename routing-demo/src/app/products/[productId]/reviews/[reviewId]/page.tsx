export const getRandomInt = () => {
  return Math.floor(Math.random() * 2);
};

const ReviewPage = async ({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) => {
  if (getRandomInt() % 2 === 0) {
    throw new Error('Error loading review');
  }

  const { productId, reviewId } = await params;
  return (
    <h1>
      Viewing review {reviewId} for product {productId}
    </h1>
  );
};

export default ReviewPage;
