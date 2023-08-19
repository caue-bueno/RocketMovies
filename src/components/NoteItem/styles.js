import styled from "styled-components";

export const Container = styled.div`
  width: fit-content;
  padding: 1.6rem;
  display: flex;
  align-items: center;
  gap: 1.6rem;
  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.GRAY_900};
  border: ${({ theme, isNew }) => isNew ? `2px dashed ${theme.COLORS.GRAY_700}` : "none" };

  border-radius: 1rem;


  > button {
    border: none;
    background: none;
    
  }

  > input {
    height: 56px;
    width: 100%;

    padding: 12px;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`