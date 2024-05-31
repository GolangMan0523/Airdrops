import styled from "styled-components";
import { breakpoints } from "@/styles/theme";

export const StyledButton = styled.button<{ $textColor?: string; $bgColor?: string; }>`
  color: ${props => props.$textColor || props.theme.colors.white};
  border: 1px solid ${props => props.theme.colors.gold};
  border-radius: 10px;
  background-color: ${props => props.$bgColor || props.theme.colors.black};
  padding: 8px 12px;
  font-size: 16px;
  @media (max-width: ${breakpoints.tablet}) {
    padding: 4px 6px;
    border-radius: 5px;
    font-size: 12px;
  }
  cursor: pointer;
`;
