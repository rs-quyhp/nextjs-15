'use client';

import { ImageSlider } from '../components/imageSlider';
import { useTheme } from '../components/themeProvider';

const ClientRoutePage = () => {
  const theme = useTheme();
  return <h1 style={{ color: theme.colors.secondary }}>Client route page</h1>;
};

export default ClientRoutePage;
