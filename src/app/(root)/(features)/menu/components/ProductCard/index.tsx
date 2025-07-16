import { AddShoppingCart } from "@mui/icons-material";
import { Card, CardContent, CardMedia, Chip, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";
import { IProduct } from "../../interfaces/product.interfaces";

export default function ProductCard({
    product, 
    selectedProduct,
    setSelectedProduct
}: Readonly<{product: IProduct, selectedProduct: IProduct[] | null, setSelectedProduct: Dispatch<SetStateAction<IProduct[] | null>>}>) {

    function countBadge() {
        const alreadyClicked = selectedProduct?.some(item => item.id === product.id);
        if (!alreadyClicked) {
            setSelectedProduct([...selectedProduct ?? [], product]);
            toast.success('Item adicionado ao carrinho', {
                autoClose: 3000,
                position: 'top-right'
            })
        } else {
            toast.warn('Item já adicionado ao carrinho', {
                autoClose: 3000,
                position: 'top-right'
            })
        }
    }
    return (
        <Card sx={{ width: 400, backgroundColor: 'primary.dark' }}>
            <CardMedia
                sx={{ height: 140 }}
                image={product.image}
                title={product.name}
            />
            <CardContent>
                <Stack direction={'row'} justifyContent={'space-between'} alignContent={'center'} justifyItems={'center'}>
                    <Typography variant="h3" component="div" sx={{ color: 'text.secondary', alignSelf: 'center' }}>
                        {product.name}
                    </Typography>
                    <Stack direction={'row'} spacing={2} alignItems={'center'}>
                        <Chip 
                        label={product.category} 
                        sx={{ 
                            backgroundColor: 'secondary.dark', 
                            color: 'text.secondary', 
                            fontWeight: 'bold' 
                            }}
                        />
                        <Tooltip title="Adicionar ao carrinho">
                            <IconButton onClick={() => countBadge()}>
                                <AddShoppingCart sx={{ color: 'text.secondary' }}/>
                            </IconButton>
                        </Tooltip>
                    </Stack>
                </Stack>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                    {product.price}
                </Typography>
         </CardContent>
        </Card>
    )
}