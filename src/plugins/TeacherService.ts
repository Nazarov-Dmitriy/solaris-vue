import axiosR from "@/api/http";
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


    public getCurrentTeacher(): void {
        this._axiosR.get('/teacher/get_current_teacher').then(res => {
            if (res.status === 200) {
                this.teacherStore.setUser(res.data)
            }
        });
    }
}