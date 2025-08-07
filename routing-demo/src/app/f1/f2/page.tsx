import Link from 'next/link';

const F2Page = () => {
  return (
    <div>
      <h1>F2 Page</h1>
      <div>
        <Link href="/f4">F4</Link>
      </div>
      <div>
        <Link href="/f1/f2/inner-f2">Inner F2</Link>
      </div>
    </div>
  );
};

export default F2Page;
