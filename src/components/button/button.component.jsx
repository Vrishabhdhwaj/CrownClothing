// import './button.styles.scss';
import { BaseButton, GoogleSignInButton, InvertedButton} from './button.styles';

export const BUTTON_TYPE_CLASSES = {
    base: 'base',
    google: 'google-sign-in',
    inverted: 'inverted',
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
}[buttonType]);

//Old code
// const BUTTON_TYPE_CLASSES = {
//     google: 'google-sign-in',
//     inverted: 'inverted',
// };

// const Button = ({children, buttonType, ...otherProps}) => {
//     return (
//         <button 
//             className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
//             {...otherProps}
//         >
//             {children}
//         </button>
//     );
// };


// New Code
const Button = ({ children, buttonType, ...otherProps }) => {
    const CustomButton = getButton(buttonType);
    return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;