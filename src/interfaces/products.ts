export interface ProductMainResponse {
    data: ProductMain[];
    status: number;
}

export interface ProductMain {
    id: number;
    uuid: string;
    name: string;
    price: number;
    image_url: string;
}

/* export interface ProductsMainQueryParams {
      page: number;
      perPage: number;
} */
