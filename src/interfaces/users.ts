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
    profession: string,
    name: string,
    surname: string,
    fathername: string
}

export interface Student extends User {
    teacher_id: string,
    name: string,
    surname: string,
    fathername: string,
    shop_id: string,
}

export interface AuthFormUser {
    username: string,
    password: string
}

export enum UserCategoryEnum {
    Teacher = "Учитель",
    Student = "Ученик"
}