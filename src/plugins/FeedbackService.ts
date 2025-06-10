import axiosR from "@/api/http";
import { FeedbackForm } from "@/interfaces/feedback";
import { AxiosResponse } from "axios";

import { App } from "vue";

export default {
    install: (app: App) => {
        app.provide("FeedbackService", new FeedbackService())
    }
}

export class FeedbackService {
    private _axiosR = axiosR

    public sendFeedback(data: FeedbackForm): Promise<AxiosResponse<[]>> {
        return this._axiosR.post('/user/feedback', data);
    }
/* 
    public getCurrentUser(): Promise<AxiosResponse<User>> {
        return this._axiosR.get('/user/current_user')
    }
 */
}