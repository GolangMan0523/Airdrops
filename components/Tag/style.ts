import styled from "styled-components";
import { breakpoints } from "@/styles/theme";

export const StyledTag = styled.button`
  color: ${props => props.theme.colors.white};
  border: 1px solid #212121;
  border-radius: 10px;
  background-color: ${props => props.theme.colors.black};
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 12px;
  @media (max-width: ${breakpoints.mobile}) {
    padding: 0 6px;
  }
  min-height: 32px;
`;

export const TagText = styled.p`
  margin: 0;
  font-size: 12px;
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 8px;
  }
`;