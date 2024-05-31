import styled from "styled-components";
import { cinzel } from "@/styles/GlobalStyles";
import { breakpoints } from "@/styles/theme";

export const CardWrapper = styled.div`
  padding: 16px 16px 48px 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid ${props => props.theme.colors.darkGrey};
  border-radius: 10px;
  background-color: ${props => props.theme.colors.black};
  cursor: pointer;
`

export const CardImageWrapper = styled.div`
  border-radius: 10px;
  overflow: hidden;
`

export const CardTitle = styled.h3`
  color: ${props => props.theme.colors.white};
  font-size: 16px;
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 12px;
  }
  font-family: ${cinzel.style.fontFamily};
  margin: 0;

`

export const WrapSpaceBetween = styled.div`
	width: 100%;
  display: flex;
	justify-content: space-between;
  align-items: center;
	padding: 2px;
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;