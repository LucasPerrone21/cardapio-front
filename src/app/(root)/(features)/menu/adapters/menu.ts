import { IProduct, IProductRequest } from "../interfaces/product.interfaces"

export async function getMenu(): Promise<IProduct[]> {
    const res = await fetch('/api/menu', { method: 'GET' })
    const data: IProductRequest[] = await res.json()
    return data.map((item) => ({ ...item, price: `R$ ${item.price.toFixed(2)}` }))
}

export async function postOrder(selectedProduct: IProduct[]){
    const res = await fetch('/api/order', { 
        method: 'POST', 
        body: JSON.stringify(
            selectedProduct.map((item) => ({
                id: item.id,
                count: 1
            }))
        )
     })

    return res.status
}