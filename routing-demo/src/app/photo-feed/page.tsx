import Link from 'next/link';
import wondersImages from './wonder';
import Image from 'next/image';

const PhotoFeedPage = () => {
  return (
    <main>
      <h1>New wonders of the world</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {wondersImages.map(({ id, src, name, slug }) => (
          <Link href={`/photo-feed/${slug}`} key={id}>
            <Image
              src={src}
              alt={name}
              className="w-full object-cover aspect-square"
            />
          </Link>
        ))}
      </div>
    </main>
  );
};

export default PhotoFeedPage;
