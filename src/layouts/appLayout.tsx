import { FC, ReactNode } from 'react';

import { Navbar } from '@/components';
import { Main } from '@/globalStyles';

interface Props {
  children: ReactNode;
}

export const AppLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Main>{children}</Main>
    </>
  );
};
