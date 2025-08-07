import Image from 'next/image';
import wondersImages from '../../wonder';
import Modal from '@/app/components/modal';

const InterceptedPhotoDetailPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const photo = wondersImages.find((photo) => photo.slug === slug)!;

  return (
    <Modal>
      <Image
        alt={photo?.name}
        src={photo?.src}
        className="w-full object-cover aspect-square"
      />

      <div className="bg-white py-4 px-4">
        <h3 className="font-bold">{photo?.photographer}</h3>
        <h3>{photo?.location}</h3>
      </div>
    </Modal>
  );
};

export default InterceptedPhotoDetailPage;
