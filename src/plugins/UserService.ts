import axiosR from "@/api/http";
import { AuthFormUser, User } from "@/interfaces/users";
import { useAuthStore } from "@/stores/useAuthStore";
import { AxiosResponse } from "axios";

import { App } from "vue";

export default {
    install: (app: App) => {
        app.provide("UserService", new UserService())
    }
}

export class UserService {
    private _axiosR = axiosR
    private userAuthStore = useAuthStore()

    public loginUser(data: AuthFormUser): Promise<AxiosResponse<User>> {
        return this._axiosR.post('/auth/login', data);
    }

    public getCurrentUser(): User {
        return this.userAuthStore.getUser
    }
}