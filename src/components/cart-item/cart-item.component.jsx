import './cart-item.styles.scss';
import { CartContext } from '../../contexts/cart.context';

const CartItem = ({cartItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    return (
        <div className='cart-item-container'>
            <img src={imageUrl} alt={`${name}`} />
            {/* <h2>{name}</h2> */}
            <div className='item-details'>
                <span className='name'>{name}</span>
                <span className='price'>{quantity} x ${price}</span>
            </div>
            {/* <span>{quantity}</span> */}
        </div>
    );
};

export default CartItem;
