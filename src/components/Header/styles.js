import styled from "styled-components";
import { Input } from "../../components/Input";

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

export const Body = styled.body`
  height: calc(100vh - 11.6rem);
  overflow-x: auto;
`;

export const Search = styled(Input)`
  background-color: red;
  color: white;
`;

export const Profile = styled.div`
  width: 35rem;
  height: 6.8rem;
  display: flex;
  gap: 1rem;

  font-size: 1.4rem;
  font-weight: bold;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;

    a {
      color: ${({ theme }) => theme.COLORS.GRAY_700};
    }
  }

  > img {
    width: 6.4rem;

    border-radius: 50%;
  }
`;
