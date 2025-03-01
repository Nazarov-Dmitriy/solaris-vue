import axiosR from "@/api/http";
import { App } from "vue";

export default {
    install: (app: App) => {
        app.provide("CompetitionService", new CompetitionService())
    }
}

export class CompetitionService {
    private _axiosR = axiosR

    public getListCompetitionCurrentUser() : Promise<any>{
        return;
    }
}