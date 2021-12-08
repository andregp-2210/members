import styled from 'styled-components';
import { device } from '../../../Assets/Styles/GlobalStyles';

export const MainContainer = styled.section`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 30% 70%;
  grid-gap: 10px;
  box-sizing: border-box;
  padding: 10px 20px;
  @media screen and ${device.laptopL} {
    grid-template-columns: initial;
    grid-template-rows: auto calc(50% - 20px);
  }
  @media screen and ${device.mobileL} {
    padding: 10px 5px;
  }
`;
