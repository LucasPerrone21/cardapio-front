export async function getMenu(){
    const res = await fetch(`${process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : ''}/menu`, { method: 'GET' })
    const data = await res.json()
    return data
}