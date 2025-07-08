import axiosR from "@/api/http";
import { useAuthStore } from "@/stores/useAuthStore";
import { usePipulStore } from "@/stores/usePipulStore";

import { App } from "vue";

export default {
    install: (app: App) => {
        app.provide("PupilService", new PupilService())
    }
}

export class PupilService {
    private _axiosR = axiosR
    private pipulStore = usePipulStore();
    private authStore = useAuthStore();

    public getCurrentPipul(): void {
        this._axiosR.get('/pupil/get_current_pupil').then(res => {
            if (res.status === 200) {
                console.log(res.data);
                
                this.pipulStore.setUser(res.data.data)
            }
        })
        .catch((e) => {
            if(e.status === 401){
                this.pipulStore.clearUser();
                this.authStore.clearUser();
            }
        } )
    }
}