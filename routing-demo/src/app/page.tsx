import Link from 'next/link';

const HomePage = () => {
  return (
    <>
      <h1>Welcome to the home page</h1>
      <p>
        <Link href={'/blog'}>Blog</Link>
      </p>
      <Link href={'/products'}>Products</Link>
    </>
  );
};

export default HomePage;
