import styled from 'styled-components';

import { device } from '@/styles/responsive';

export const ToursContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 40px;
  padding: 60px;

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${device.laptopL} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
