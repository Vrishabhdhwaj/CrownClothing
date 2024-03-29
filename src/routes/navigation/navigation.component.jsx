import { Outlet, Link } from 'react-router-dom';
import { Fragment, useContext } from 'react';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'; 
import {UserContext} from '../../contexts/user.context';
import {CartContext} from '../../contexts/cart.context';
import {signOutUser} from '../../utils/firebase/firebase.utils';
import {
    NavigationContainer,
    LogoContainer,
    NavLinks,
    NavLink,
  } from './navigation.styles';
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
      <NavigationContainer>
        <LogoContainer to='/'>
          <Logo />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>SHOP</NavLink>

          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to='/auth'>SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
    )
  }

export default Navigation;