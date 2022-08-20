// import './form-input.styles.scss';
import {Group, FormInputLabel, Input} from './form-input.styles';
const FormInput = ({ label, ...otherProps}) => {
    return(
        <Group>
            <Input {...otherProps} />
            <FormInputLabel shrink={otherProps.value.length}>
                {label}
            </FormInputLabel>
        </Group>
    );
};

export default FormInput;