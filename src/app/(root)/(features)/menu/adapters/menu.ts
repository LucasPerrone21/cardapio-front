export async function getMenu(){
    const res = await fetch(`${process.env.BACKEND_URL}/menu`, { method: 'GET' })
    const data = await res.json()
    return data
}