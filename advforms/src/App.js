
import './App.css';
import Form from './components/Form';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import schema from './components/formSchema';
import * as yup from 'yup';

const initialFormValues = {

first_name: '',
last_name: '',
email: '',
password: '',
terms_of_service: false 
};

const initialFormErrors = {

first_name: '',
last_name: '',
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


// [get]
//axios.get()

//[post]
const postNewUser = newUser => {
  axios.post("https://reqres.in/api/users", newUser)
  .then(res => {
    setUsers([res.data, ...users]);

  })
  .catch(err => console.error(err))
  .finally(() => setFormValues(initialFormValues))

};


//input changes
const inputChange = (name, value) => {
  setFormValues({...formValues, [name]: value});
}


//formsubmit
const formSubmit = () => {
  const newUser = {
    first_name: formValues.first_name.trim(),
    last_name: formValues.last_name.trim(),
    email: formValues.email.trim(),
    password: formValues.password.trim()
  }
postNewUser(newUser);
}


//useeffect




  return (
    <div className="App">
      <header><h1>User Onboarding!</h1></header>
     
     <Form 
     values = {formValues}
     errors = {formErrors}
     disabled = {disabled}
     submit = {formSubmit}
     />


    </div>
  );
}

export default App;
