import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 30px;
  margin: 0 0 50px 0;
  padding: 0;
`;

const Page = styled.div`
  padding: 50px;
`;

Page.Title = Title;

export default Page;