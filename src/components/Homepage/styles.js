import styled from 'styled-components';
import mainImage from '../../mainImage.jpg'


export const Panel = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ hasBackground }) => hasBackground ? '#f5dfdf' : ' #ffffff'}
`

export const Container = styled.div`
    display: flex;
    height: 100vh;
    }
`

export const TextContainer = styled.div`
    flex-direction: column;
    display: flex;
    height: 50%;
    width: 50%;
    align-items: center;
    justify-content: center;
`

export const TextElement = styled.p``;



export const LoginContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 50%;
  min-height: fit-content;
  border: 1px solid black;
`;

export const LoginTray = styled.div`
  min-height: 10rem;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 26px;
`;

export const LoginInner = styled.div`
  margin-top: 3rem;
  border: 1px solid purple;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50%;
  width: 50%;
`;

export const LoginLink = styled.a`
  height: 8.2rem;
  width: 8.2rem;
  box-sizing: border-box;
  background-color: rgba(255, 255, 255);
  border-radius: 0.5rem;
  border: 0.63px solid #979797;
  margin-bottom: 1rem;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 1rem;
  text-decoration: none;
  &:hover {
    background-color: rgba(255, 255, 255);
    box-shadow: 0 5px 14px 0 rgba(0, 0, 0, 0.13);
    border: 2px solid #f5dfdf;
  }
`;

export const Content = styled.p`
  color: #3e3d3d;
  text-align: center;
  margin: 2rem;
`;

export const ProviderName = styled(Content)`
  margin: 0;
  padding-top: 0.5rem;
  letter-spacing: 0.025rem;
  text-transform: initial;
  color: #565656;
  text-shadow: 0 0.05rem 0 0 rgba(0, 0, 0, 0.5);
`;

export const LoginIcon = styled.img`
  width: 3rem;
  height: 3rem;
`;

export const LoginMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  border: 1px solid red;
`;

export const LoginHeading = styled.div`
  width: 20.5rem;
  color: #565656;
  text-align: center;
`;

export const TermsLabel = styled.label`
  width: 27.8rem;
  display: inline-block;
  text-align: center;
  a,
  a:hover,
  a:visited,
  a:link {
    color: #2c73dc;
    text-decoration: none;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;



