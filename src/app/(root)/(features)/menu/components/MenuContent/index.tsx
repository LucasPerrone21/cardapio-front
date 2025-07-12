import { Stack } from "@mui/material";
import { IProduct } from "../../interfaces/product.interfaces";
import Header from "../Header";
import ProductCard from "../ProductCard";

const info: IProduct[] = [
    {name: 'HotRoll', price: 'R$ 20,00', category: 'Sushi'},
    {name: 'HotRoll', price: 'R$ 20,00', category: 'Sushi'},
    {name: 'HotRoll', price: 'R$ 20,00', category: 'Sushi'},
    {name: 'HotRoll', price: 'R$ 20,00', category: 'Sushi'},
]

export default function MenuContent() {
    return (
        <Stack width={'100%'} spacing={2}>
            <Header/>
            <Stack
                direction={'row'}
                padding={2}
                spacing={2}
                useFlexGap
                sx={{ flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
                {info.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </Stack>
        </Stack>

    )
}