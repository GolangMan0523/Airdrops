import { StyledTag } from "./style";

const Tag = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledTag>
      {children}
    </StyledTag>
  );
}

export default Tag;