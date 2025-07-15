import { IProduct, IProductRequest } from "../interfaces/product.interfaces"

export async function getMenu(): Promise<IProduct[]> {
    const res = await fetch('/api/menu', { method: 'GET' })
    const data: IProductRequest[] = await res.json()
    return data.map((item) => ({ ...item, price: `R$ ${item.price.toFixed(2)}` }))
}

export async function postOrder(productId: number){
    const res = await fetch('/api/order', { 
        method: 'POST', 
        body: JSON.stringify({id: productId, count: 1})
     })

    return res.status
}