export interface CompetitionItem {
    id: number,
    name: string,
    author_id: number,
    description_short: string,
    task_competitions: string,
    begin_at: string,
    tags: string[],
}

export interface CompetitionResponse {
    status: string,
    data: CompetitionItem[],
}