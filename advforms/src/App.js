
import './App.css';
import Form from './components/Form';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import schema from './components/formSchema';
import * as yup from 'yup';

const initialFormValues = {

username: '',
email: '',
password: '',
tos: false 
};

const initialFormErrors = {

username:'',
email: '',
password: ''
};

const initialUsers = [];
const initialDisabled = true;




function App() {
//build states here
const [formValues, setFormValues] = useState(initialFormValues);
const [formErrors, setFormErrors] = useState(initialFormErrors);
const [disabled, setDisabled] = useState(initialDisabled);
const [users, setUsers] = useState(initialUsers);



//[post]
const postNewUser = newUser => {
  axios.post("https://reqres.in/api/users", newUser)
  .then(res => {
    setUsers([res.data, ...users]);

  })
  .catch(err => console.error(err))
  .finally(() => setFormValues(initialFormValues))

};

const validate = (name, value) => {
  yup.reach(schema, name).validate(value)
  .then(() => setFormErrors({...formErrors, [name]: ''}))
  .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
}


//input changes
const inputChange = (name, value) => {
  validate(name, value);
  setFormValues({...formValues, [name]: value});
}


//formsubmit
const formSubmit = () => {
  const newUser = {
    username: formValues.username.trim(),
    email: formValues.email.trim(),
    password: formValues.password.trim(),
    tos: !initialDisabled
  }
postNewUser(newUser);
}


useEffect(() => {
  schema.isValid(formValues).then(valid => setDisabled(!valid))
}, [formValues])



  return (
    <div className="App">
      <header><h1>User Onboarding!</h1></header>
     
     <Form 
     values = {formValues}
     errors = {formErrors}
     disabled = {disabled}
     submit = {formSubmit}
     change = {inputChange}
     />



    </div>
  );
}

export default App;
