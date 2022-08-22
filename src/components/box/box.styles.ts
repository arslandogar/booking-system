import styled from 'styled-components';
import {
  space,
  color,
  layout,
  flexbox,
  SpaceProps,
  ColorProps,
  LayoutProps,
  FlexboxProps,
} from 'styled-system';

type BoxProps = SpaceProps & ColorProps & LayoutProps & FlexboxProps;

export const Box = styled.div<BoxProps>(
  {
    boxSizing: 'border-box',
    minWidth: 0,
  },
  space,
  color,
  layout,
  flexbox
);
