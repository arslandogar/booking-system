import styled from 'styled-components';

import { Box } from '../box';

export const Card = styled(Box)`
  border-radius: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease-in;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;

// export const Card = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   width: 100%;
//   height: 100%;
//   color: black;
//   font-size: 1.2rem;
//   border-radius: 20px;
//   box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
//   transition: all 0.3s ease-in;
//   cursor: pointer;
//   &:hover {
//     transform: scale(1.05);
//   }
// `;

export const CardImg = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 20px 20px 0 0;
  object-fit: cover;
`;

export const CardContent = styled.div`
  padding: 1rem;
`;

export const CardTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const CardText = styled.p`
  font-size: 1rem;
  color: grey;
  margin-bottom: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-height: 16px; /* fallback */
  max-height: 32px; /* fallback */
  -webkit-line-clamp: 2; /* number of lines to show */
  -webkit-box-orient: vertical;
`;
