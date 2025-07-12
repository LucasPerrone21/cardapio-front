import { AddShoppingCart } from "@mui/icons-material";
import { Card, CardContent, CardMedia, Chip, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import { IProduct } from "../../interfaces/product.interfaces";

export default function ProductCard({product}: Readonly<{product: IProduct}>) {
    return (
        <Card sx={{ width: 450, backgroundColor: 'primary.dark' }}>
            <CardMedia
                sx={{ height: 140 }}
                image="/hot-roll.jpg"
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
                            <IconButton>
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