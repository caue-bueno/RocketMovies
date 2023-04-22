import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 5.6rem;
  margin-bottom: 0.8rem;
  

  background-color: ${({ theme }) => theme.COLORS.GRAY_900};
  border-radius: 0.8rem;

  display: flex;
  align-items: center;

  > input {
    width: 100%;
    height: 100%;

    background: transparent;
    border: none;

    color: ${({ theme }) => theme.COLORS.WHITE};

    margin-left: 1.6rem;

    &:placeholder {
     
    }
  }

  > svg {
    margin-left: 1.6rem;
    color: ${({ theme }) => theme.COLORS.GRAY_700};;
  }
`;
