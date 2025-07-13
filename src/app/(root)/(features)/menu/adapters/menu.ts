import { IProduct, IProductRequest } from "../interfaces/product.interfaces"

export async function getMenu(): Promise<IProduct[]> {
    const res = await fetch('/api/menu', { method: 'GET' })
    const data: IProductRequest[] = await res.json()
    return data.map((item) => ({ ...item, price: `R$ ${item.price.toFixed(2)}` }))
}