'use client'
import { Stack } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { IProduct } from "../../interfaces/product.interfaces";

import { getMenu } from "../../adapters/menu";
import CarBadge from "../CarBadge";
import Header from "../Header";
import ProductCard from "../ProductCard";

export default function MenuContent() {
    const [selectedProduct, setSelectedProduct] = useState<IProduct[] | null>(null);
    const { data } = useQuery({
        queryKey: ['menu'],
        queryFn: () => getMenu()
    })
    
    return (
        <Stack width={'100%'} spacing={2}>
            <Header />
            <Stack
                direction={'row'}
                padding={2}
                spacing={4}
                useFlexGap
                sx={{ flexWrap: 'wrap', alignItems: 'center', justifyContent: 'flex-start' }}>
                {data?.map((product, index) => (
                    <ProductCard key={index} product={product} selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct}/>
                ))}
            </Stack>
            <CarBadge selectedProduct={selectedProduct} />
        </Stack>

    )
}