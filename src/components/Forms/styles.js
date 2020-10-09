import styled from 'styled-components';
import { primaryFont } from '../../fonts';

export const LoginContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  flex: 1 0;
  min-height: fit-content;
  border: 1px solid black;
`;

const transitionEasing = 'ease-in-out';

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
    border: 2px solid #7c47ef;
  }
`;

export const Content = styled.p`
  font: 700 1.4rem ${primaryFont};
  color: #3e3d3d;
  text-align: center;
  margin: 2rem;
  line-height: 2.5rem;
`;

export const ProviderName = styled(Content)`
  margin: 0;
  padding-top: 0.5rem;
  font: 300 1.2rem ${primaryFont};
  letter-spacing: 0.025rem;
  text-transform: initial;
  transition: all 0.2s ${transitionEasing};
  color: #565656;
  text-shadow: 0 0.05rem 0 0 rgba(0, 0, 0, 0.5);
`;

export const LoginIcon = styled.img`
  width: 3rem;
  height: 3rem;
  transition: all 0.2s ${transitionEasing};
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
  font: 1.5rem/2.9rem ${primaryFont};
`;

export const TermsLabel = styled.label`
  width: 27.8rem;
  font: 300 1.4rem/1.6rem ${primaryFont};
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
