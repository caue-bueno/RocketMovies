import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 11.6rem auto;
  grid-template-areas:
    "header"
    "content";

  body {
    grid-area: content;

    padding: 5rem 12rem 0;
  }

  main {

    padding-right: 2.4rem;
    margin-top: 1.5rem;
    height: 72rem;
    overflow-y: scroll;
    
    ::-webkit-scrollbar {
      width: 0.8rem;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.COLORS.PINK};
      border-radius: 0.8rem;
    }

    scrollbar-color: ${({ theme }) => theme.COLORS.PINK} transparent;
    scrollbar-width: thin;

    h1 {
      margin-top: 2.4rem;
    }

    textarea {
      width: 100%;
      height: 27.4rem;
      padding: 1.6rem;
      margin-bottom: 4rem;

      background-color: ${({ theme }) => theme.COLORS.GRAY_900};
      border-radius: 0.8rem;
      border: none;

      resize: none;

      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    h2 {
      font-size: 2rem;
      color: #999591;
    }

    section {
        width: 100%;
        height: 8.8rem;
        padding: 1.6rem;
        margin-top: 2.4rem;
        display: flex;
        gap: 2.4rem;

        background-color: #0D0C0F;
        border-radius: 0.8rem;
      }

      svg {
        font-size: 2rem;
        color: ${({ theme }) => theme.COLORS.PINK};
      }
    }
`;

export const ButtonBack = styled.div`
  width: 5em;
`;

export const Box = styled.div`
  display: flex;
  gap: 4rem;

  margin: 3rem 0 ;
`;

export const Tag = styled.div`
  width: fit-content;
  padding: 1.6rem;
  display: flex;
  align-items: center;
  gap: 1.6rem;

  background-color: ${({ theme }) => theme.COLORS.GRAY_900};
  border-radius: 1rem;
`;

export const New = styled.div`
  width: fit-content;
  padding: 1.6rem;
  display: flex;
  align-items: center;
  gap: 1.6rem;

  border-radius: 1rem;
  border: dashed #948F99 2px;
`;

export const DeleteButton = styled.button`
  width: 100%;
  padding: 1.75rem 0;
  background-color: black;
  color: ${({ theme }) => theme.COLORS.PINK};
  border-radius: 1rem;
  border: none;
`;

export const SaveButton = styled.button`
  width: 100%;
  padding: 1.75rem 0;
  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.GRAY_600};
  border-radius: 1rem;
  border: none;
`;



