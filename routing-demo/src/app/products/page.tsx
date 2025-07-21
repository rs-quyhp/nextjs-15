import Link from 'next/link';

const ProductsPage = () => {
  return (
    <>
      <h1>Welcome to the products page</h1>
      <p>
        <Link href={'/products/1'}>Product 1</Link>
      </p>
      <p>
        <Link href={'/products/2'} replace>
          Product 2
        </Link>
      </p>
      <p></p>
    </>
  );
};

export default ProductsPage;
