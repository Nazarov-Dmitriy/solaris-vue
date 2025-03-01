import { UserCategoryEnum } from "@/interfaces/users";
import { NavigationGuardNext } from "vue-router";

//Проверяет, является ли пользователь учителем или учеником при переходе на другие маршруты
export const authorizedGuard = (next: NavigationGuardNext) => {
    const category = localStorage.getItem('category')
    switch (category) {
        case UserCategoryEnum.Student:
            next('/cabinet/student')
            return;
        case UserCategoryEnum.Teacher:
            next('/cabinet/teacher')
            return;
    }
}