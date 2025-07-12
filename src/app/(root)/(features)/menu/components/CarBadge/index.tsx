import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge, { BadgeProps } from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import { IProduct } from '../../interfaces/product.interfaces';

const StyledBadge = styled(Badge)<BadgeProps>(() => ({
  '& .MuiBadge-badge': {
    right: -5,
    top: 0,
    padding: '0 4px'
  },
}));

export default function CarBadge({selectedProduct}: {selectedProduct: IProduct[] | null}) {
  return (
    <IconButton 
    aria-label="cart" 
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
  );
}
