import styled from 'styled-components';

export const Outline = styled.div`
  border: 1px solid #212121;
  border-radius: 99999px;
  background-color: ${props => props.theme.colors.black};
  padding: 2px;
`;

export const Innerline = styled.div`
  height: 50px;
  width: 50px;
  border: 1px solid ${props => props.theme.colors.gold};
  border-radius: 99999px;
  background-color: ${props => props.theme.colors.black};
  overflow: hidden;
`;