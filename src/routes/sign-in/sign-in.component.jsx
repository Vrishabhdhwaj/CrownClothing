import { signInPopup, UserDocfromAuth } from '../../utils/firebase/firebase.utils'

const SignIn = () => {

    const logUser = async () => {
        const {user} = await signInPopup();
        // console.log(response);
        console.log(user.displayName);
        UserDocfromAuth(user);
        const userDocumentRef = UserDocfromAuth(user);
    }

    return (
        <div>
            <h1>Sign In</h1>
            <button onClick={logUser}>
                Google pop up to sign in
            </button>
        </div>
    );
};

export default SignIn;