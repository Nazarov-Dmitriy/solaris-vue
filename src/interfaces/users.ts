export interface User {
    user_id: string,
    email: string,
    username: string,
    password: string,
    category: UserCategoryEnum
    token: string
}

export interface Teacher extends User {
    teacher_id: string,
    profeccion: string,
    name: string,
    surname: string,
    fathername: string,
    shop_id: number | null,
    uuid: string,
    competition_activities: null | unknown,
    ball_balans: number,
    ball_qual: number,
    ball_atestat: number,
    avatar_url: string | null,
}

export interface Student extends User {
    amount: number,
    avatar_url: string,
    class_name: string,
    id: number,
    level: number,
    name: string,
    surname: string,
    fathername: string,
    username: string,
    teacher_id: number,
    reiting_class: Rating,
    reiting_potok: Rating,
    reiting_school: Rating;
}

export interface Rating {
    level_max: number,
    level_pupil: number,
    solar_pupil: number,
    solar_max: number,
    solar_next: number,
}

export interface AuthFormUser {
    username: string,
    password: string
}

export enum UserCategoryEnum {
    Teacher = "Учитель",
    Student = "Ученик"
}

export interface LogoutResponse {
    result: boolean;
}

export interface UserPortfolioItem {
    id: number;
    user: {
        id: number;
        name: string;
        class: string;
        category: string;
    };
    text: string;
    roles: string[];
    nastavnik: {
        id: number;
        full_name: string;
    } | null;
    solariki: number;
    cost: number;
    status: string;
    created_at: string;
}

export interface UserPortfolioResponse {
    status: string;
    data: UserPortfolioItem[];
}

export interface UserMessage {
    id: number;
    text: string;
    category: string;
    watch_at: string;
}

export interface UserMessagesResponse {
    status: string;
    data: UserMessage[];
}
