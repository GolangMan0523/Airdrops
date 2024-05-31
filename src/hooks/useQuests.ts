"use client"

import { useQuery } from '@tanstack/react-query'
import { fetchQuests } from '../services/quests'

const useQuests = () => {
  return useQuery({
    queryKey: ['quests'],
    queryFn: () => fetchQuests(),
  })
}

export default useQuests