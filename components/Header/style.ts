import styled from "styled-components";
import { cinzel } from '@/styles/GlobalStyles'
import { breakpoints } from "@/styles/theme";

export const StyledHeader = styled.header`
	width: 100%;
  display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 3px 50px;
	@media (max-width: ${breakpoints.mobile}) {
    padding: 3px 20px;
  }
`;

export const Logo = styled.div`
`;

export const StatusBar = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`;

export const StatusNumber = styled.p<{ $color?: string; }>`
	color: ${props => props.$color || props.theme.colors.gold};
	font-family: ${cinzel.style.fontFamily};
	font-size: 14px;
	@media (max-width: ${breakpoints.mobile}) {
    font-size: 10px;
  }
	margin: 0;
`;
