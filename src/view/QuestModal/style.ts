import styled from "styled-components";
import { cinzel } from "@/styles/GlobalStyles";
import { breakpoints } from "@/styles/theme";

export const CardWrapper = styled.div`
  padding: 16px 16px 100px 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid ${props => props.theme.colors.darkGrey};
  border-radius: 10px;
  background-color: ${props => props.theme.colors.black};
  position: relative;
`

export const CardImageWrapper = styled.div`
  border-radius: 10px;
  overflow: hidden;
`

export const CardTitle = styled.h3`
  font-size: 16px;
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 12px;
  }
  font-family: ${cinzel.style.fontFamily};
  margin: 0;
`

export const CardDescription = styled.p`
  color: ${props => props.theme.colors.lightGrey};
  font-size: 14px;
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 12px;
  }
  text-align: justify;
  margin: 0;
`

export const WrapSpaceBetween = styled.div`
	width: 100%;
  display: flex;
	justify-content: space-between;
  align-items: center;
	padding: 2px;
`;

export const ModalButtonGroup = styled.div`
	width: 100%;
  display: flex;
	justify-content: space-between;
  align-items: center;
	padding: 0 16px;
  position: absolute;
  Bottom: 10px;
  left: 0;
  gap: 5px;
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;