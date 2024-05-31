import { useRouter } from 'next/navigation';
import { CardTitle, CardWrapper, WrapSpaceBetween, CardImageWrapper, Wrap } from './style';
import { StatusNumber } from '../Header/style';
import Tag from '../Tag';
import { TagText } from '../Tag/style';
import { Quest } from '@/types/types';

const QuestCard = ({ quest }: { quest: Quest }) => {
  const { cover, title, rewards, language, difficulty, type, slug } = quest
  const router = useRouter();

  return (
    <CardWrapper onClick={() => router.push(`/quest?questSlug=${slug}`)}>
      <CardImageWrapper>
        <img
          src={cover ? cover : '/assets/cardImg.png'}
          alt='card Image'
          width='100%'
          height='100%'
          className='object-cover'
        />
      </CardImageWrapper>

      <WrapSpaceBetween>
        <CardTitle>{title}</CardTitle>
        <Wrap>
          <img src='/assets/exp.png' alt='exp' />
          <StatusNumber $color='#CCCCCC'>{rewards.expPoints}</StatusNumber>
        </Wrap>
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
        </Wrap>
      </WrapSpaceBetween>
    </CardWrapper>
  );
};

export default QuestCard;
