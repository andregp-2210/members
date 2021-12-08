import styled from 'styled-components';
import { shake } from '../../../Assets/Styles/Animations';

export const InputContainer = styled.div`
  position: relative;
  margin: 10px 0px 5px 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const InputLabel = styled.label`
  margin-left: 5px;
  margin-bottom: 1px;
  font-weight: 700;
`;

export const Input = styled.input`
  width: calc(100% - 10px);
  padding: 15px 5px;
  border: none;
  margin: 5px 0px;
  border-radius: 10px;
  font-size: 15px;
`;
export const InputError = styled.p`
  position: absolute;
  margin: 0px;
  margin-left: 102%;
  margin-top: 35px;
  padding: 5px;
  min-width: 200px;
  width: auto;
  background-color: beige;
  border-radius: 5px;
  border-color: white;
  color: var(--danger-color);
  text-align: left;
  font-size: 15px;
  font-weight: 700;
  ${shake({ time: '0.8s', type: 'both' })}
`;
