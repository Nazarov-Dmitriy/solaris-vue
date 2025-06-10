import axiosR from "@/api/http";/* 
import { ProductForm } from "@/interfaces/Product"; */
import { ProductMain, ProductMainResponse } from "@/interfaces/products";
import { AxiosResponse } from "axios";

import { App } from "vue";

export default {
    install: (app: App) => {
        app.provide("ProductService", new ProductService())
    }
}

export class ProductService {
    private _axiosR = axiosR

    public getProductsMain(page: number, perPage = 3): Promise<AxiosResponse<ProductMainResponse>> {
        return this._axiosR.get(`/tovars/main?page=${page}&per_page=${perPage}`);
    }
/* 
    public getCurrentUser(): Promise<AxiosResponse<User>> {
        return this._axiosR.get('/user/current_user')
    }
 */
}