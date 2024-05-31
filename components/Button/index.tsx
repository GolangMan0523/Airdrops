import { MouseEventHandler } from "react";
import { StyledButton } from "./style";

const Button = ({ children, textColor, bgColor, onClick }: { children: React.ReactNode; textColor?: string; bgColor?: string; onClick?: MouseEventHandler<HTMLButtonElement> | undefined; }) => {
  return (
    <StyledButton $textColor={textColor} $bgColor={bgColor} onClick={onClick}>
      {children}
    </StyledButton>
  );
}

export default Button;