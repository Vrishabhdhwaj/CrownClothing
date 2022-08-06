import { Outlet, Link } from 'react-router-dom';
import { Fragment, useContext } from 'react';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import {UserContext} from '../../contexts/user.context';
import {signOutUser} from '../../utils/firebase/firebase.utils';
import './navigation.styles.scss'
const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    console.log(currentUser);

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
        </div>
      </div>
      <Outlet />
    </Fragment>
    )
  }

export default Navigation;