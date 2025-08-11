import Link from 'next/link';

const ProductPage = () => {
  return (
    <div className="mx-4">
      <h1>Featured products</h1>
      <div>
        <Link href={'/products/1'}>Product 1</Link>
      </div>
      <div>
        <Link href={'/products/2'}>Product 2</Link>
      </div>
      <div>
        <Link href={'/products/3'}>Product 3</Link>
      </div>
    </div>
  );
};

export default ProductPage;
