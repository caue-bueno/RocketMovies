import styled from "styled-components";

export const Container = styled.div``;

export const Header = styled.div`
  width: 100%;
  height: 14.4rem;
  display: flex;
  justify-content: left;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_2};

  > a {
    margin-left: 14.4rem;
    margin-top: 6.4rem;
  }
`;

export const Avatar = styled.div`
  width: fit-content;

  position: relative;
  margin: -250px auto 100px;

  display: flex;
  
  justify-content: center;

  > img {
    width: 18.6rem;
    height: 18.6rem;

    border-radius: 50%;
  }

  > label {
    position: absolute;
    bottom: 0;
    right: 1rem;

    width: 4.8rem;
    height: 4.8rem;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.COLORS.PINK};

    border-radius: 50%;

    input {
      display: none;
    }

    svg {
      color: ${({ theme }) => theme.COLORS.GRAY_900};

      width: 2rem;
      height: 2rem;
    }
  }
`;

export const Form = styled.form`
  width: 34rem;
  margin: 15.7rem auto 0;

  > :nth-child(3) {
    margin-bottom: 2.4rem;
  }
`;
