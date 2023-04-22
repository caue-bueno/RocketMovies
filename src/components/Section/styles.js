import styled from "styled-components";

export const Container = styled.div`
  height: 22.3rem;
  padding: 3.2rem;
  margin-right: 8px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_2};

  border-radius: 1.6rem;

  > h2 {
    margin-bottom: 0.8rem;
  }

  > p {
    margin-bottom: 1.5rem;

    color: ${({ theme }) => theme.COLORS.GRAY_700};

    overflow: hidden;

    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

    > div:nth-child(2) {
    display: flex;
    gap: 0.6rem;
    margin-bottom: 1.5rem;

    

  svg {
      color: ${({ theme }) => theme.COLORS.PINK};
      fill: ${({ theme }) => theme.COLORS.PINK};
    }

  }  
`;
