'use client';

import { useTheme } from '../components/themeProvider';
import { clientSideFunction } from '../utils/client-utils';

const ClientRoutePage = () => {
  const theme = useTheme();
  const result = clientSideFunction();
  return (
    <h1 style={{ color: theme.colors.secondary }}>
      Client route page {result}
    </h1>
  );
};

export default ClientRoutePage;
