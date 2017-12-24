import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import variables from '../config/variables';

const Page = styled.div`
  direction: ${({ theme }) => theme.isRTL ? 'rtl' : 'ltr'};
  text-align: ${({ theme }) => theme.isRTL ? 'right' : 'left'};
`;

export default ({ children }) => (
  <ThemeProvider theme={variables}>
    <Page>
      {children}
    </Page>
  </ThemeProvider>
);
