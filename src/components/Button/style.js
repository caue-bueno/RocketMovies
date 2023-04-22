import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 5.6rem;
  margin-top: 2.4rem;
  

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.PINK};
  border: none;
  border-radius: 1rem;

  font-size: 1.6rem;
  font-weight: medium;
  color: ${({ theme }) => theme.COLORS.GRAY_900};
`;