import { useState,useContext } from 'react';
import './sign-up-form.styles.scss'
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import {UserContext} from '../../contexts/user.context'
import { authUserEmailPassword, UserDocfromAuth } from '../../utils/firebase/firebase.utils'
const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;
    
    // const {setCurrentUser} = useContext(UserContext);
    // this clears out the input fields after the submit button is clicked.
    const resetFormFields = () => {
        setFormFields(defaultFormFields); 
    }

    console.log(formFields);
    const handleSubmit = async (event) => {
        event.preventDefault();
        if(password !== confirmPassword) {
            alert("passwords do not match");
            return;
        }

        try{
            const { user } = await authUserEmailPassword(
                email,
                password
            );
            // console.log(response);

            // setCurrentUser(user);
            await UserDocfromAuth(user, { displayName })
            resetFormFields();
        } catch (error) {
            if(error.code==='auth/email-already-in-use') {
                alert('Email already in use :/');
            } else {
            console.log('account creation error encountered', error);
            }
        }
    }
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({ ...formFields, [name]: value });
    };
    
    return (
        <div className='sign-up-container'>
            <h2>Do not have an account rn? We got you covered</h2>
            <span>email sign up</span>
            <form onSubmit={handleSubmit}>
                {/* <label>Display Name</label> */}
                <FormInput label="Display Name" type = 'text' required onChange={handleChange} name='displayName' value={displayName}/>

                {/* <label>Email</label> */}
                <FormInput label="Email" type='email' required onChange={handleChange} name="email" value={email}/>

                {/* <label>Password</label> */}
                <FormInput label="Password" type='password' required onChange={handleChange} name="password" value={password}/>

                {/* <label>Confirm Password</label> */}
                <FormInput label="Confirm Password" type='password' required onChange={handleChange} name="confirmPassword" value={confirmPassword}/>
                <Button type='submit'>Sign Up</Button>
            </form>
        </div>
    );
};

export default SignUpForm;