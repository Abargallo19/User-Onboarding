import { React } from 'react';


const userForm = (props) => {
const { values, errors, disabled, change, submit} = props;

const onChange = evt => {
    const {name, value, checked, type } = evt.target;
    const useValue = type === "checkbox" ? checked : value;
    change(name, useValue);
}
const onSubmit = evt => {
    evt.preventDefault()
    submit()
}



   return (
<form className= 'form-container' onSubmit={onSubmit}>
<h3>Hey Newbie!</h3>
<div className= 'inputs'>
    <label>First Name
        <input
        onChange= {onChange}
        type='text'
        name= 'first name'
        />
    </label>
    <label>email
        <input 
        value = {values.email}
        onChange = {onChange}
        name = 'email'
        type = 'text'
        />
    </label>

</div>


</form>
   ) 
};


export default userForm;