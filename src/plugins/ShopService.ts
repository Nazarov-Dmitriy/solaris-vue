import axiosR from "@/api/http";/* 
import { ProductForm } from "@/interfaces/Product"; */
import { ProductMain, ProductMainResponse } from "@/interfaces/products";
import { CurrUserPurchasesResponse, ProductResponse, ProductsPaginationResponse, ProductSaleResponse } from "@/interfaces/shop";
import { useShopStore } from "@/stores/useShopStore";
import { AxiosResponse } from "axios";

import { App } from "vue";

export default {
    install: (app: App) => {
        app.provide("ShopService", new ShopService())
    }
}

export class ShopService {
    private _axiosR = axiosR
    private shopStore = useShopStore()

    public getProducts(): Promise<void | AxiosResponse<ProductsPaginationResponse>> {
        if(this.shopStore.products.has(this.shopStore.currentPage)){
            return Promise.resolve();
        }else{
        return this._axiosR.get<ProductsPaginationResponse>(`/tovars/catalogs?page=${this.shopStore.currentPage}&per_page=${this.shopStore.perPage}`)
        .then((res) => {
            if(res.status === 200){
                this.shopStore.setProducts(res.data.data, this.shopStore.currentPage)
                if(this.shopStore.pagesCount !== res.data.meta.page.last_page) this.shopStore.setPagesCount(res.data.meta.page.last_page)
            }
            return res
        })
    }}

    public getProductById(id: number) {
        return this._axiosR.get<ProductResponse>(`/tovars/catalogs/${id}`)
        .then((res) => {
            if(res.status === 200) {
                console.log(res.data)
            }
            return res.data.data
        })
    }

    public getCurrentUserPurchases() {
        return this._axiosR.get<CurrUserPurchasesResponse>('/tovars/curentuser')
        .then(res => {
            if(res.status === 200) {
                console.log(res.data)
            }
            return res.data.data
        })
    }

    public saleProduct(tovarCatalogId: number, count: number): Promise<AxiosResponse<ProductSaleResponse>> {
        return this._axiosR.post('/tovars/sale', null, {
            params: {
                tovar_catalog_id: String(tovarCatalogId),
                count: String(count),
            },
        })
    }
}
