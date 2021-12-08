import styled from 'styled-components';

import { device } from '../../../Assets/Styles/GlobalStyles';

export const TableContainer = styled.div`
  max-height: 100%;
  overflow-y: scroll;
`;

export const Table = styled.table`
  position: relative;
  width: 100%;
  border-collapse: collapse;
  align-self: start;
  td,
  th {
    border: 1px solid #efefef;
    text-align: left;
    padding: 8px;
  }
  th {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1;
    background: #fff;
  }
  tr:nth-child(even) {
    background-color: #efefef;
  }
  @media screen and ${device.laptopL} {
    width: 95%;
    margin: 0 auto;
    tbody {
      max-height: 50%;
    }
  }
`;
