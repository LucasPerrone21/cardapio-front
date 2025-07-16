import { Button, Card, CardActions, CardContent, CardHeader, List, ListItem, Popper, Stack, Typography } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";
import { postOrder } from "../../adapters/menu";
import { IProduct } from "../../interfaces/product.interfaces";

type IOrderList = {
    anchorEl: null | HTMLElement,
    open: boolean
    selectedProduct: IProduct[] | null
    setSelectedProduct: Dispatch<SetStateAction<IProduct[] | null>>
}
export default function OrderList({anchorEl, open, selectedProduct, setSelectedProduct}: IOrderList) {
    const mutation = useMutation({
        mutationFn: async () => await postOrder(selectedProduct ?? []),
        onSuccess: () => {
            setSelectedProduct(null)
            toast.success('Pedido realizado com sucesso', {
                autoClose: 3000,
                position: 'top-right'
            })
        },
        onError: () => {
            toast.error('Erro ao realizar pedido. Tente novamente mais tarde ou entre em contato com nossa ouvidoria', {
                autoClose: 3000,
                position: 'top-right'
            })
        }
    })

    return (
        <Popper
        open={open}
        anchorEl={anchorEl}
        placement="top-end">
        <Card>
        <CardHeader title="Confirmar pedido" />
        <CardContent>
            {selectedProduct ? 
            <List sx={{ maxHeight: 300, overflow: 'auto', width: 300 }}>
                {selectedProduct?.map((item) => (
                    <ListItem key={item.id} sx={{ borderBottom: '1px solid'}}>
                        <Stack direction={'row'} justifyContent={'space-between'} sx={{ width: '100%' }}>
                            <Typography>{item.name}</Typography>
                            <Typography>{item.price}</Typography>
                        </Stack>
                    </ListItem>
                ))}
                <ListItem>
                    <Stack direction={'row'} justifyContent={'space-between'} sx={{ width: '100%' }}>
                        <Typography fontWeight={'bold'}>Total:</Typography>
                        <Typography>{selectedProduct.reduce((acc, item) => acc + Number(item.price.replace('R$ ', '')), 0).toFixed(2)}</Typography>
                    </Stack>
                </ListItem>
            </List> : 
            <Typography>Seu carrinho está vazio</Typography>
            }
        </CardContent>
        <CardActions sx={{ justifyContent: 'end' }}>
            <Button disabled={!selectedProduct} onClick={() => mutation.mutate()} loading={mutation.isPending}>Enviar pedido</Button>
        </CardActions>
        </Card>
      </Popper>
    )
}