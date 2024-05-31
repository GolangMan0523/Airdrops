import { useRouter } from 'next/navigation';
import { CardTitle, CardWrapper, WrapSpaceBetween, CardImageWrapper, Wrap, CardDescription, ModalButtonGroup } from './style';
import { StatusNumber } from '@/components/Header/style';
import Tag from '@/components/Tag';
import { TagText } from '@/components/Tag/style';
import { Quest } from '@/types/types';
import Button from '@/components/Button';
import { useAtom } from 'jotai';
import { userAtom } from '@/components/Header';

const QuestModal = ({ quest }: { quest: Quest }) => {
  const { cover, title, rewards, language, difficulty, type, slug, description } = quest
  const router = useRouter();
  const [user, setUser] = useAtom(userAtom)

  return (
    <CardWrapper>
      <CardImageWrapper>
        <img
          src={cover ? cover : '/assets/cardImg.png'}
          alt='card Image'
          width='100%'
          height='100%'
          className='object-cover-1-4'
        />
      </CardImageWrapper>

      <WrapSpaceBetween>
        <CardTitle>{title}</CardTitle>
      </WrapSpaceBetween>

      <WrapSpaceBetween>
        <Wrap>
          <Tag>
            <img src='/assets/solidity.svg' alt='solidity' />
            <TagText>{language.label}</TagText>
          </Tag>
          <Tag>
            {Array.from({ length: difficulty }).map((_, index) => (
              <img key={index} src='/assets/sword.svg' alt='solidity' />
            ))}
          </Tag>
          <Tag>
            <TagText>{type.label}</TagText>
          </Tag>
        </Wrap>
        <Wrap>
          <img src='/assets/gold.png' alt='gold' />
          <StatusNumber $color='#CCCCCC'>{rewards.gold}</StatusNumber>
          &nbsp;
          <img src='/assets/exp.png' alt='exp' />
          <StatusNumber $color='#CCCCCC'>{rewards.expPoints}</StatusNumber>
        </Wrap>
      </WrapSpaceBetween>

      <CardDescription>
        {description}
      </CardDescription>

      <ModalButtonGroup className="absolute">
        <Button onClick={() => router.push(`/quests`)}>Go Back</Button>
        <Button onClick={() => setUser({ id: user.id, expPoints: user.expPoints + rewards.expPoints, gold: user.gold + rewards.gold })} textColor="#080808" bgColor="#BEA77E">Airdrop rewards to The Guardian</Button>
      </ModalButtonGroup>
    </CardWrapper>
  );
};

export default QuestModal;
