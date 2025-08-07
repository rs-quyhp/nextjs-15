import Link from 'next/link';

const F1Page = () => {
  return (
    <div>
      <div>F1 Page</div>
      <div>
        <Link href="/f1/f2">F2</Link>
      </div>
      <div>
        <Link href="/f3">F3</Link>
      </div>
    </div>
  );
};

export default F1Page;
