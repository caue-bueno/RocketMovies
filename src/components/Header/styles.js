import styled from "styled-components";
import { Input } from "../../components/Input";
import { Link } from "react-router-dom";

export const Container = styled.header`
  grid-area: header;
  width: 100%;
  height: 11.6rem;
  padding: 3rem 12.3rem;

  display: flex;
  align-items: center;
  gap: 6.4rem;

  border-bottom: solid 2px ${({ theme }) => theme.COLORS.GRAY_900};

  > h2 {
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;

export const Search = styled(Input)`
  background-color: red;
  color: white;
  min-width: 6rem;
`;

export const Wrapper = styled.div`
  position: relative;
  width: 35rem;
  height: 6.8rem;
  display: flex;
  gap: 1rem;

  font-size: 1.4rem;
  font-weight: bold;
  color: white;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    min-width: 14.5rem;

    button {
      position: absolute;
      bottom: 0;
      z-index: 1;
      color: ${({ theme }) => theme.COLORS.GRAY_700};
      border: none;
      background: none;
    }
  }

  > img {
    width: 6.4rem;
    cursor: pointer;
    border-radius: 50%;
  }
`;

export const Profile = styled(Link)`
  font-size: 1.4rem;
  font-weight: bold;
  color: white;
`
