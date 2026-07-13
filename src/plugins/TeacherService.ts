import axiosR from "@/api/http";
import { useAuthStore } from "@/stores/useAuthStore";
import { useTeacherStore } from "@/stores/useTeacherStore";

import { App } from "vue";

export default {
    install: (app: App) => {
        app.provide("TeacherService", new TeacherService())
    }
}

export class TeacherService {
    private _axiosR = axiosR
    private teacherStore = useTeacherStore()
        private authStore = useAuthStore()


    public getCurrentTeacher(): void {
        this._axiosR.get('/teacher/get_current_teacher').then(res => {
            if (res.status === 200) {
                this.teacherStore.setUser(res.data.data)
            }
        }).catch((e) => {
            if(e.status === 401){
                this.teacherStore.clearUser();
                this.authStore.clearUser();
            }
        } );
    }

    public async postTeacherCase(data: FormData) {
        return await this._axiosR.post('/teacher/keis', data);
    }

    public async checkCertificate(number: string) {
        return await this._axiosR.get(`/tovars/cert-check/${number}`);
    }

    public async activateCertificate(number: string) {
        return await this._axiosR.post('/tovars/cert-activate', null, {
            params: { number },
        });
    }
}
