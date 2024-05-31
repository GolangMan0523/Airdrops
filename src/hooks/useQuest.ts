"use client"

import { useQuery } from '@tanstack/react-query'
import { fetchQuest } from '../services/quests'

const useQuest = (slug: string) => {
  return useQuery({
    queryKey: ['quest', slug],
    queryFn: () => fetchQuest(slug),
  })
}

export default useQuest