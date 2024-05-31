const fetchQuests = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/api/quests`, {
    method: "GET",
  });
  return response.json();
}

const fetchQuest = async (slug: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/api/quest?questSlug=${slug}`, {
    method: "GET",
  });
  return response.json();
}

export { fetchQuests, fetchQuest }