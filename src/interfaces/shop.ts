export interface Product {
    id: number,
    uuid: string,
    code: string,
    name: string,
    description: string,
    price: number,
    category_id: number,
    image_url: string,
}

export interface MetaPages {
    current_page: number,
    per_page: number,
    from: number,
    to: number,
    total: number,
    last_page: number,
}

export interface ProductsPaginationResponse {
    status: string,
    data: Product[],
    meta: {
        page: MetaPages,
    }
}