import axiosR from "@/api/http";
import { CompetitionItem, CompetitionItemByIdResponse, CompetitionParticipantsResponse, CompetitionTagsResponse, UserCompetitionItemsResponse, UserJoinCompetition } from "@/interfaces/competitions";
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

    public async getCompetitionById(id: number){
        return await this._axiosR.get<CompetitionItemByIdResponse>(`/pupil/competitions/${id}`);
    }

    public async getUserCompetitions(){
        return await this._axiosR.get<UserCompetitionItemsResponse>('/user/competitions');
    }

    public getCompetitionsTags(){
        return this._axiosR.get<CompetitionTagsResponse>('/competitions/tags');
    }

    public async getCompetitionParticipants(id: number) {
        return await this._axiosR.get<CompetitionParticipantsResponse>(`/competition/${id}/pupils`);
    }

    public async postTeacherJoinContest(competitionId: number) {
        return await this._axiosR.post<UserJoinCompetition>('/teacher/competition/userjoin', { competition_id: competitionId });
    }
}