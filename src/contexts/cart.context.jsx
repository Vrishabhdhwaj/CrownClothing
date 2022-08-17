import {createContext, useState, useEffect} from 'react';

export const addCartItem = (cartItems, product) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id ===product.id
    );

    if (existingCartItem) {
        return cartItems.map((cartItem) =>
        cartItem.id===product.id 
            ? {...cartItem, quantity: cartItem.quantity+1}
            :cartItem);
    }

    return [...cartItems, {...product, quantity:1}];
};

export const removeCartItem = (cartItems, cartItemToRemove) =>{
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id
    );

    if(existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    };

    if (existingCartItem) {
        return cartItems.map((cartItem) =>
        cartItem.id===cartItemToRemove.id 
            ? {...cartItem, quantity: cartItem.quantity-1}
            :cartItem);
    }
}

export const clearCartItem = (cartItems, cartItemToClear) => {
    return cartItems.filter((cartItem) => cartItem.id!==cartItemToClear.id);
}

export const CartContext = createContext({
    isCartOpen : false,
    setIsCartOpen : () => {},
    cartItems : [],
    addItemToCart : () => {},
    removeItemFromCart : () => {},
    clearItemFromCart : () => {},
    cartCount : 0,
    cartTotal : 0
});

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        // console.log(Array.isArray(cartItems));
        const newCartCount = cartItems.reduce((total, cartItem) => total+cartItem.quantity, 0);
        // console.log(newCartCount);
        setCartCount(newCartCount);
    }, [cartItems]);

    useEffect(() => {
        // console.log(Array.isArray(cartItems));
        const newCartTotal = cartItems.reduce(
            (total, cartItem) => total+cartItem.quantity*cartItem.price, 0);
        // console.log(newCartCount);
        setCartTotal(newCartTotal);
    }, [cartItems]);

    const addItemToCart = (product) => {
        setCartItems(addCartItem(cartItems,product));
    };

    const removeItemFromCart = (product) => {
        setCartItems(removeCartItem(cartItems,product));
    };

    const clearItemFromCart = (product) => {
        setCartItems(clearCartItem(cartItems,product));
    };

    const value = {isCartOpen, setIsCartOpen, addItemToCart, removeItemFromCart, clearItemFromCart, cartItems, cartCount, cartTotal};
    return <CartContext.Provider value = {value}>{children}</CartContext.Provider>;
};