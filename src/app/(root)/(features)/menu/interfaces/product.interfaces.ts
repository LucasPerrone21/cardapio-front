export interface IProduct {
    id: number;
    price: string;
    name: string;
    category: string;
    image: string
}

export interface IProductRequest {
    id: number;
    price: number;
    name: string;
    category: string;
    image: string
}