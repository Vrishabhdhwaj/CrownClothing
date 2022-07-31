import { auth, signInPopup, UserDocfromAuth, signInRedirect } from '../../utils/firebase/firebase.utils'
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

const SignIn = () => {

   

    const logUser = async () => {
        const {user} = await signInPopup();
        // console.log(response);
        // console.log(user.displayName);
        // UserDocfromAuth(user);
        const userDocumentRef = await UserDocfromAuth(user);
    }

    return (
        <div>
            <h1>Sign In</h1>
            <button onClick={logUser}>
                Google pop up to sign in
            </button>
            <SignUpForm></SignUpForm>
            
        </div>
    );
};

export default SignIn;