import { Stack } from "@mui/material";
import { useState } from "react";
import { IProduct } from "../../interfaces/product.interfaces";
import CarBadge from "../CarBadge";
import Header from "../Header";
import ProductCard from "../ProductCard";

const info: IProduct[] = [
    {id: 1, name: 'HotRoll', price: 'R$ 20,00', category: 'Sushi'},
    {id: 2, name: 'Sashimi', price: 'R$ 20,00', category: 'Sushi'},
    {id: 3, name: 'Temaki', price: 'R$ 20,00', category: 'Sushi'},
    {id: 4, name: 'Uramaki', price: 'R$ 20,00', category: 'Sushi'},
    {id: 5, name: 'Hossomaki', price: 'R$ 20,00', category: 'Sushi'},
    {id: 6, name: 'Niguiri', price: 'R$ 20,00', category: 'Sushi'},
    {id: 7, name: 'Uni', price: 'R$ 20,00', category: 'Sushi'},
]

export default function MenuContent() {
    const [selectedProduct, setSelectedProduct] = useState<IProduct[] | null>(null);

    return (
        <Stack width={'100%'} spacing={2}>
            <Header />
            <Stack
                direction={'row'}
                padding={2}
                spacing={4}
                useFlexGap
                sx={{ flexWrap: 'wrap', alignItems: 'center', justifyContent: 'flex-start' }}>
                {info.map((product, index) => (
                    <ProductCard key={index} product={product} selectedProduct= {selectedProduct} setSelectedProduct={setSelectedProduct}/>
                ))}
            </Stack>
            <CarBadge selectedProduct={selectedProduct} />
        </Stack>

    )
}