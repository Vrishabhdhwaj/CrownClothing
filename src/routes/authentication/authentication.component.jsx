// import { auth, signInPopup, UserDocfromAuth, signInRedirect } from '../../utils/firebase/firebase.utils'
import './authentication.styles.scss'
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';

const Authentication = () => {

   

    // const logUser = async () => {
    //     const {user} = await signInPopup();
    //     // console.log(response);
    //     // console.log(user.displayName);
    //     // UserDocfromAuth(user);
    //     const userDocumentRef = await UserDocfromAuth(user);
    // }

    return (
        <div className="authentication-container">
            <h1>Sign In</h1>
            <SignInForm></SignInForm>
            <SignUpForm></SignUpForm>
            
        </div>
    );
};

export default Authentication;