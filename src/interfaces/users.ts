export interface User {
    email: string,
    username: string,
    password: string,
    category: UserCategoryEnum
    token: string
}

export interface AuthFormUser {
    username: string,
    password: string
}

export enum UserCategoryEnum {
    Teacher = "Учитель",
    Student = "Ученик"
}