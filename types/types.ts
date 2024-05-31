export type Quest = {
    title: string
    description: string
    difficulty: number
    slug: string
    cover: string
    language: Language
    type: Type
    rewards: Reward
}

export type Language = {
    id: string
    label: string
}

export type Type = {
    id: string
    label: string
}

export type Reward = {
    expPoints: number
    gold: number
}

export type User = {
    id: string
    expPoints: number
    gold: number
}
