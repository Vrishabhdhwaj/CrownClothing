import Button from '../button/button.component';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import {CartContext} from '../../contexts/cart.context'
import {useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import {CartDropdownContainer, CartItems, EmptyMessage} from './cart-dropdown.styles';
const CartDropdown = () => {
    const {cartItems} = useContext(CartContext);
    const navigate = useNavigate();
    const goToCheckoutHandler = () => {
        navigate('./checkout')
    }
    

    return (
        <CartDropdownContainer>
            <CartItems>
                {cartItems.length ? (
                    cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
                ) : (
                    <EmptyMessage>Fill up that Jholi first.</EmptyMessage>
                )}
                <Button onClick={goToCheckoutHandler}>Checkout</Button>
            </CartItems>
        </CartDropdownContainer>
    );
};

export default CartDropdown;