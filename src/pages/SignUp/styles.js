import styled from 'styled-components';
import backgroundImg  from '../../assets/background.png';

export const Container = styled.div`
  
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 23.5rem 18.1rem 0 13.4rem;
  display: flex;
  flex-direction: column;

  > h1 {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 4.8rem;
    font-weight: bold;
  }

  > span {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.GRAY_700};
  }

  > h3 {
    margin: 4.8rem 0;
    font-size: 2.4rem;
  }

  > Button {
    margin-bottom: 3.8rem;
  }

  > ButtonText {
    align-items: center;
  }

  
`;

export const Background = styled.div`
flex: 1;
background: url(${backgroundImg}) no-repeat center center;
background-size: cover;
`;
