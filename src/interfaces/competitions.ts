export interface CompetitionItem {
    id: number,
    name: string,
    author_id: number,
    description_short: string,
    task_competitions: string,
    begin_at: string,
    tags: string[],
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