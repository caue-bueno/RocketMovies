import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  background-color: transparent;

  color: ${({ theme }) => theme.COLORS.PINK};
  font-weight: regular;
  text-decoration: none;

  svg {
    margin-right: 0.8rem;
  }
`;
