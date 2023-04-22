import styled from "styled-components";

export const Container = styled.span`

  padding: 0.5rem 1.6rem;

  font-size: 1.2rem;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  color: ${({ theme }) => theme.COLORS.GRAY_500};

  border-radius: 0.8rem;
`;