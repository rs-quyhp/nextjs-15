export const generateStaticParams = () => {
  return [{ id: '1' }, { id: '2' }, { id: '3' }];
};

const ProductDetails = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  return (
    <>
      <h1>
        Product {id} details rendered at {new Date().toLocaleTimeString()}
      </h1>
    </>
  );
};

export default ProductDetails;
