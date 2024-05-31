import styled from "styled-components";
import { breakpoints } from "@/styles/theme";


export const StyledPanel = styled.div<{ $modal?: boolean; }>`
  width: 100vw;
  height:  ${props => props.$modal ? "auto" : "90vh"};
  padding: ${props => props.$modal ? "20px 25% 50px 25%" : "20px 80px 50px 80px"};
  @media (max-width: ${breakpoints.tablet}) {
    padding: 20px 10px 20px  10px;
  }
`

export const CardsBackground = styled.div`
  background-image: url("/assets/cardPanelBackground.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding: 15px;
  width:100%;
  height:100%;
`

export const CardsWrapper = styled.div`
  margin: 0;
  display: grid;
  @media (min-width: ${breakpoints.lgdesktop}) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (min-width: ${breakpoints.desktop}) and (max-width: ${breakpoints.lgdesktop}) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  gap: 10px;
  width:100%;
  height:100%;
  overflow: auto;
`