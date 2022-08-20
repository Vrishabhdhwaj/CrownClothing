// import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import {useContext} from 'react';
import {CartContext} from '../../contexts/cart.context';
// import './cart-icon.styles.scss';
import {ShoppingIcon, CartIconContainer, ItemCount} from './cart-icon.styles'

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext);
    const togglecart = () => setIsCartOpen(!isCartOpen);
    return (
        <CartIconContainer onClick={togglecart}>
            <ShoppingIcon className='shopping-icon' />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    );
};

export default CartIcon;