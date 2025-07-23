export interface CompetitionItem {
    id: number,
    name: string,
    author_id: number,
    description_short: string,
    task_competitions: string,
    begin_at: string,
    tags: string[],
}

export interface UserCompetitionItem {
    id: number,
    title: string,
    ball: number,
    finish_at: string,
    begin_at: string,
}

export interface UserCompetitionItemsResponse {
    status: string,
    data: UserCompetitionItem[],
}

export interface CompetitionTag {
    id: number,
    name: string,
    image: string,
}

export interface CompetitionResponse {
    status: string,
    data: CompetitionItem[],
}

export interface CompetitionTagsResponse {
    status: string,
    data: CompetitionTag[],
}