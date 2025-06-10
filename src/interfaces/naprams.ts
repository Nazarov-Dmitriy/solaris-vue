export interface NapramsResponse {
    data: Napram[];
    status: number;
}

export interface Napram {
    id: number;
    image: string;
    name: string;
}