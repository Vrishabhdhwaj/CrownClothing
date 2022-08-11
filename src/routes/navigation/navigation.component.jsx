import { Outlet, Link } from 'react-router-dom';
import { Fragment, useContext } from 'react';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'; 
import {UserContext} from '../../contexts/user.context';
import {CartContext} from '../../contexts/cart.context';
import {signOutUser} from '../../utils/firebase/firebase.utils';
import './navigation.styles.scss'
const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    console.log(currentUser);
    console.log("OOOKKKK nav");
    const { isCartOpen } = useContext(CartContext);

    // const signOutHandler = async () => {
    //     const res = await signOutUser();
    //     console.log(res);
    // }
    return (
    <Fragment>
      <div className='navigation'>
          
        <Link className='logo-container' to='/'>
            <div>
                <Logo />
            </div>
        </Link>
        <div className='nav-links-container'>
            <Link className='nav-link' to='/shop'>
                SHOP
            </Link>
            {currentUser ? (
                <span className='nav-link' onClick={signOutUser}>Sign Out</span>
            ) : (
            <Link className='nav-link' to='/auth'>
                Sign In
            </Link>
            )}
            <CartIcon />
        </div>      
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
    )
  }

export default Navigation;