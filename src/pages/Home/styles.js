import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 11.6rem auto;
  grid-template-areas: 
  "header"
  "content";

  > main {
    grid-area: content;
    padding: 5rem 12rem 0;
    height: calc(100vh - 11.6rem);
    overflow-x: auto;
  }
`;

export const Content = styled.div`
  height: 47rem;
      margin-bottom: 5rem;
      display: flex;
      flex-direction: column;
      gap: 2.4rem;
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

      section {
      margin-top: 2rem;
      display: flex;
      gap: 1.5rem;
    }
`;

export const Wrapper = styled.div`
  margin-bottom: 4rem;
  display: flex;
  justify-content: space-between;

  > h1 {
    font-weight: 400;
  }

  > a {
    width: 20rem;
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.COLORS.PINK};
    color: ${({ theme }) => theme.COLORS.GRAY_900};

    border: none;
    border-radius: 0.8rem;
  }
`;


