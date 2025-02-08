import axiosR from "@/api/http";
import { App } from "vue";

export default {
    install: (app: App) => {
        app.provide("UserService", new UserService())
    }
}

export class UserService {
    private _axiosR = axiosR

    public loginUser() : Promise<any>{
        return;
    }
}