"use client"

import QuestModal from "@/src/view/QuestModal";
import { CardsBackground, StyledPanel } from "@/src/view/QuestsPanel/style";
import useQuest from '@/src/hooks/useQuest';
import { Quest } from '@/types/types';

export default function Page({
  searchParams,
}: {
  searchParams?: { [questSlug: string]: string | string[] | undefined };
}) {
  const slug: string = typeof (searchParams?.questSlug) === "string" ? searchParams.questSlug : ""
  const { data, isPending, isFetching } = useQuest(slug)
  const quest: Quest = data || null
  if (isPending || isFetching) return <h1 className="text-center">Loading...</h1>

  return (
    <StyledPanel $modal={true}>
      <CardsBackground>
        {
          data ?
            <QuestModal quest={quest} />
            :
            <h1 className="text-center">No Quest Available</h1>
        }
      </CardsBackground>
    </StyledPanel>
  );
}