import { React } from 'react';


const userForm = (props) => {
const { errors, disabled, change, submit} = props;
const { username, email, password, tos } = props.values

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
<p>{errors.username}</p>
<p>{errors.password}</p>
<p>{errors.email}</p>
<p>{errors.tos}</p>

<div className= 'inputs'>
    <label>Username
        <input
        value={username}
        onChange= {onChange}
        type='text'
        name= 'username'
        />
    </label>
    <label>email
        <input 
        value = {email}
        onChange = {onChange}
        name = 'email'
        type = 'text'
        />
    </label>
    <label>Terms of Service
        <input 
        type = 'checkbox'
        name = 'tos'
        checked = {tos}
        onChange = {onChange}
        />
        

    </label>
    <label>password
        <input 
        type='password'
        name= 'password'
        onChange= {onChange}
        value= {password}
        />
        
    </label>
    <input disabled={disabled} type = 'submit' value = 'create a user'/>

</div>


</form>
   ) 
};


export default userForm;