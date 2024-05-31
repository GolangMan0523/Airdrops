"use client"

import useQuests from '@/src/hooks/useQuests';
import QuestsPanel from '@/src/view/QuestsPanel';
import { Quest } from '@/types/types';

export default function Page() {
  const { data, isPending, isFetching } = useQuests()
  const quests: Quest[] = data || []

  if (isPending || isFetching) return <h1 className="text-center">Loading...</h1>

  return (
    <QuestsPanel data={quests} />
  );
}