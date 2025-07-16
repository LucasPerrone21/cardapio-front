export async function GET(){
    try {
        const res = await fetch(`${process.env.BASE_URL}/menu`, { method: 'GET' })
        const data = await res.json()
        return new Response(JSON.stringify(data), { status: 200 })
    } catch(err) {
        return new Response(JSON.stringify(err), { status: 500 })
    }
}