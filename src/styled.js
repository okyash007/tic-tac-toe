import styled, { css } from "styled-components";

export const Heading = styled.h1`
  ${({ $color }) => css`
    color: ${$color};
  `}
  text-align: center;
`;
