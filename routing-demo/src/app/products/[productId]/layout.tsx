const ProductLayout = ({ children }: { children: React.ReactNode }) => {
  const getRandomInt = () => {
    return Math.floor(Math.random() * 2);
  };

  if (getRandomInt() % 2 === 0) {
    throw new Error("Error loading product");
  }

  return (
    <>
      {children}
      <h2>Featured Products</h2>
    </>
  );
};

export default ProductLayout;
