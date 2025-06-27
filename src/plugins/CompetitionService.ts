import axiosR from "@/api/http";
import { CompetitionResponse } from "@/interfaces/competitions";
import { App } from "vue";

export default {
    install: (app: App) => {
        app.provide("CompetitionService", new CompetitionService())
    }
}

export class CompetitionService {
    private _axiosR = axiosR

    public getListCompetitions(){
        return this._axiosR.get<CompetitionResponse>('/competitions');
    }
}