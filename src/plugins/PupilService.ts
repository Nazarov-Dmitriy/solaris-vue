import axiosR from "@/api/http";
import { usePipulStore } from "@/stores/usePipulStore";

import { App } from "vue";

export default {
    install: (app: App) => {
        app.provide("PupilService", new PupilService())
    }
}

export class PupilService {
    private _axiosR = axiosR
    private pipulStore = usePipulStore()

    public getCurrentPipul(): void {
        this._axiosR.get('/pupil/get_current_pupil').then(res => {
            if (res.status === 200) {
                this.pipulStore.setUser(res.data)
            }
        });
    }
}