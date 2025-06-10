import axiosR from "@/api/http";/* 
import { NapramForm } from "@/interfaces/Napram"; */
import { NapramsResponse } from "@/interfaces/naprams";
import { AxiosResponse } from "axios";

import { App } from "vue";

export default {
    install: (app: App) => {
        app.provide("NapramService", new NapramService())
    }
}

export class NapramService {
    private _axiosR = axiosR

    public getNaprams(): Promise<AxiosResponse<NapramsResponse>> {
        return this._axiosR.get('/competitions/tags');
    }
/* 
    public getCurrentUser(): Promise<AxiosResponse<User>> {
        return this._axiosR.get('/user/current_user')
    }
 */
}