import { ImageSlider } from '../components/imageSlider';
import { clientSideFunction } from '../utils/client-utils';

const ServerRoutePage = () => {
  const result = clientSideFunction();
  return (
    <>
      <ImageSlider />
      <h1>Server page {result}</h1>
    </>
  );
};

export default ServerRoutePage;
