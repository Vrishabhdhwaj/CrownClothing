import { useState } from 'react';
import './sign-in-form.styles.scss'
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import { signInPopup, authUserEmailPassword, UserDocfromAuth, authUserEmailPasswordSignIn } from '../../utils/firebase/firebase.utils'
const defaultFormFields = {
    
    email: '',
    password: '',
    
}

const SignInForm = () => {
    
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;
    
    const signInWithGoogle = async () => {
        const {user} = await signInPopup();
        // console.log(response);
        // console.log(user.displayName);
        // UserDocfromAuth(user);
        await UserDocfromAuth(user);
    }

    // this clears out the input fields after the submit button is clicked.
    const resetFormFields = () => {
        setFormFields(defaultFormFields); 
    }

    console.log(formFields);
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try{
            const { user } = await authUserEmailPasswordSignIn(
                email,
                password
            );
            // console.log(response);
            await UserDocfromAuth(user, { displayName })
            resetFormFields();
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('YO! the password in wrong :/');
                    break; //to stop the program from looking through all cases
                case 'auth/user-not-found':
                    alert('YOU NEW HERE???');
                    break;
                default:
                    console.log(error);
            }
            if(error.code==='auth/wrong-password') {
                alert('YO! the password in wrong :/');
            } 
            console.log('account creation error encountered', error);
            
        }
    }
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({ ...formFields, [name]: value });
    };
    
    return (
        <div className='sign-in-container'>
            <h2>Got an account ?</h2>
            <span>email sign in</span>
            <form onSubmit={handleSubmit}>
                
                {/* <label>Email</label> */}
                <FormInput label="Email" type='email' required onChange={handleChange} name="email" value={email}/>

                {/* <label>Password</label> */}
                <FormInput label="Password" type='password' required onChange={handleChange} name="password" value={password}/>
                <div className="buttons-container">
                    <Button type='submit'>Sign In</Button>
                    <Button type='button' buttonType='google' onClick={signInWithGoogle}>Google Sign In</Button>
                    {/* Here the type is button because the default type is submit and this throws an error. */}
                </div>
            </form>
        </div>
    );
};

export default SignInForm;