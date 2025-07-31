import axiosR from "@/api/http";
import { AuthFormUser, LogoutResponse, User } from "@/interfaces/users";
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

    public uploadAvatar(data: FormData) {
        return this._axiosR.post('/user/avatar', data, { headers: { "Content-Type": 'multipart/form-data' } })
    }

    public getCurrentUser(): Promise<AxiosResponse<User>> {
        return this._axiosR.get('/user/current_user')
    }

    public logoutUser(): Promise<AxiosResponse<LogoutResponse>> { 
        return this._axiosR.get('/auth/logout')
    }

}