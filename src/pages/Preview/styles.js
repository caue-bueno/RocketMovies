import styled from "styled-components";
import { FiArrowLeft, FiStar, FiClock } from "react-icons/fi";

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
    height: 58.8rem;
    margin-top: 1rem;
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
  }

  section {
    display: flex;
    gap: 1rem;
    margin-bottom: 4rem;
  }

  button {
    margin-bottom: 2.4rem;
  }

  p {
    text-align: justify;
    margin-right: 1.6rem;
  }
`;

export const ButtonBack = styled.div`
  width: 5em;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3rem;

  h1 {
    margin-right: 2rem;
  }

  img {
    width: 1.3rem;
    border-radius: 50%;
    margin-right: 0.8rem;
  }

  span {
    margin-right: 1rem;
  }

  svg {
    margin-right: 1rem;
  }
`;

export const ArrowLeft = styled(FiArrowLeft)`
  color: ${({ theme }) => theme.COLORS.PINK};
`;

export const Star = styled(FiStar)`
  color: ${({ theme }) => theme.COLORS.PINK};
  fill: ${({ theme }) => theme.COLORS.PINK};
`;

export const StarEmpty = styled(FiStar)`
  color: ${({ theme }) => theme.COLORS.PINK};
`;

export const Clock = styled(FiClock)`
  color: ${({ theme }) => theme.COLORS.PINK};
`;
