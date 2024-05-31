import QuestCard from '@/components/QuestCard';
import { CardsWrapper, StyledPanel, CardsBackground } from './style';
import { Quest } from '@/types/types';

const QuestsPanel = ({ data }: { data: Quest[] }) => {
  return (
    <StyledPanel>
      <CardsBackground>
        <CardsWrapper>
          {data.length > 0 ? (
            data.map((quest, index) => <QuestCard key={index} quest={quest} />)
          ) : (
            <h1 className="text-center">No quests available</h1>
          )}
        </CardsWrapper>
      </CardsBackground>
    </StyledPanel>
  );
};

export default QuestsPanel;
