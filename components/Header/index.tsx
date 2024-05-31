import Link from 'next/link'
import { StyledHeader, Logo, StatusBar, StatusNumber } from './style'
import Avatar from '../Avatar';
import { useAtom, atom } from 'jotai'
import { User } from '@/types/types';

export const userAtom = atom<User>({
  id: "user1",
  expPoints: 0,
  gold: 0,
});

const Header = () => {
  const [user] = useAtom(userAtom)
  const { expPoints, gold } = user

  return (
    <StyledHeader>

      <Logo>
        <Link href="/">
          <img
            src="/logo.svg"
            alt="Example Image"
          />
        </Link>
      </Logo>

      <StatusBar>
        <img
          src="/assets/gold.png"
          alt="Example Image"
        />
        <StatusNumber>{gold}</StatusNumber>
        <img
          src="/assets/exp.png"
          alt="Example Image"
        />
        <StatusNumber>{expPoints}</StatusNumber>
        <Avatar />
      </StatusBar>

    </StyledHeader>
  );
}

export default Header