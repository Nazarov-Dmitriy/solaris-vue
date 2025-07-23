import axiosR from "@/api/http";
import { CompetitionItem, CompetitionResponse, CompetitionTagsResponse, UserCompetitionItemsResponse } from "@/interfaces/competitions";
import { App } from "vue";

export default {
    install: (app: App) => {
        app.provide("CompetitionService", new CompetitionService())
    }
}

export class CompetitionService {
    private _axiosR = axiosR

    public async getListCompetitions(){
        return await this._axiosR.get<CompetitionItem[]>('/competitions');
    }

    public async getUserCompetitions(){
        return await this._axiosR.get<UserCompetitionItemsResponse>('/user/competitions');
    }

    public getCompetitionsTags(){
        return this._axiosR.get<CompetitionTagsResponse>('/competitions/tags');
    }
}