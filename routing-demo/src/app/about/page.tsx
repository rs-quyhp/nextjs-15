const AboutPage = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return <h1>Welcome to the about page</h1>;
};

export const metadata = {
  title: 'About QuyHP',
  description: 'About QuyHP',
};

export default AboutPage;
