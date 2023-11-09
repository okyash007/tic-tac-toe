import styled, { css } from "styled-components";

export const Heading = styled.h1`
  ${({ $color }) => css`
    color: ${$color};
  `}
  text-align: center;
`;

export const GridButton = styled.button`
  width: 5rem;
  height: 5rem;
  border-radius: 0.5rem;
  outline: none;
  background-color: #1f3540;
  border: 0;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  transition: 0.1s ease-in-out, 0.4s color;
  display: flex;
  justify-content: center;
  align-items: center;

  &:active {
    transform: translateX(0.1em) translateY(0.1em);
    box-shadow: 1.5px 1.5px 2.5px 1.5px rgba(0, 0, 0, 0);
  }
`;

export const Refresh = styled.button`

  border-radius: 0.5rem;
  padding: 0.5rem;
  outline: none;
  background-color: #A7BDC8;
  border: 0;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  transition: 0.1s ease-in-out, 0.4s color;
  display: flex;
  justify-content: center;
  align-items: center;

  &:active {
    transform: translateX(0.1em) translateY(0.1em);
    box-shadow: 1.5px 1.5px 2.5px 1.5px rgba(0, 0, 0, 0);
  }
`;
