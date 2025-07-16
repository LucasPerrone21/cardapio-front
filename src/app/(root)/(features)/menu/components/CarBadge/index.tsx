import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge, { BadgeProps } from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import { Dispatch, SetStateAction, useState } from 'react';
import { IProduct } from '../../interfaces/product.interfaces';
import OrderList from '../OrderList';

const StyledBadge = styled(Badge)<BadgeProps>(() => ({
  '& .MuiBadge-badge': {
    right: -5,
    top: 0,
    padding: '0 4px'
  },
}));

export default function CarBadge({selectedProduct, setSelectedProduct}: {selectedProduct: IProduct[] | null, setSelectedProduct: Dispatch<SetStateAction<IProduct[] | null>>}) {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  return (
    <>
    <IconButton 
    aria-label="cart" 
    onClick={handleClick}
    sx={{ 
        color: 'text.secondary', 
        position: 'fixed', 
        bottom: 50, 
        right: 50,
        backgroundColor: 'primary.main',
        border: '2px solid',
        '&:hover': {
            backgroundColor: 'secondary.dark'
        }
    }}>
      <StyledBadge badgeContent={selectedProduct ? selectedProduct.length : 0} color="secondary">
        <ShoppingCartIcon sx={{ fontSize: '2rem' }} />
      </StyledBadge>
    </IconButton>
    <OrderList anchorEl={anchorEl} open={open} selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct} />
    </>
  );
}
