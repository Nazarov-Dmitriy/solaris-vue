import { Student } from "./users";

export interface CompetitionItem {
    id: number,
    name: string,
    author_id: number,
    description_short: string,
    task_competitions: string,
    begin_at: string,
    tags: string[],
}

interface Teacher {
    id: number,
    profeccion: string,
    full_name: string,
    avatar_url: string,
}

export interface CompetitionItemById {
    id: number,
    title: string,
    //author_id: number,
    description: string,
    task_competitions: string,
    begin_at: string,
    teachers: Teacher[],
}

export interface CompetitionItemByIdResponse {
    status: string,
    data: CompetitionItemById
}

export interface UserCompetitionItem {
    id: number,
    title: string,
    ball: number,
    finish_at: string,
    begin_at: string,
}

export interface CompetitionParticipantsResponse {
    status: string,
    data: Student,
}

export interface UserJoinCompetition {
    status: string,
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