import { QueryClientProvider } from '@tanstack/react-query';
import * as React from 'react';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter as Router } from 'react-router-dom';

import { queryClient } from '@/lib/react-query';
import GlobalStyle from '@/styles/global';

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Router>
        <GlobalStyle />
        {children}
      </Router>
    </QueryClientProvider>
  );
};
