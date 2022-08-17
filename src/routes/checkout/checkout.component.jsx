import './checkout.styles.scss';
import {useContext} from 'react';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import {CartContext, addCartItem, removeCartItem} from '../../contexts/cart.context';
// import CartItem from '../../components/cart-item/cart-item.component'
const Checkout = () => {
    const {cartItems, addItemToCart, removeItemFromCart, cartTotal} = useContext(CartContext);
    console.log(cartItems);
    return (
        <div className='checkout-container'>
            <h1>checkout page</h1>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            
            {/* <div> */}

            {cartItems.map((cartItem) => (
            // const {id, name, quantity} = cartItem;
            // return (
                // <div key={id}>
                //     <h2>{name}</h2>
                //     <span>{quantity}</span>
                //     <br></br>
                //     <span onClick={() => addItemToCart(cartItem)}>increase</span>
                //     <br></br>
                //     <span onClick={() => removeItemFromCart(cartItem)}>decrease</span>
                // </div>
                
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            // );
            ))}

            <span className='Total'>Total : {cartTotal}</span>
            {/* </div> */}
        </div>
    )
}

export default Checkout;