
import './App.css';
import Form from './components/Form';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import schema from './components/formSchema';

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



// [get]


//[post]


//input changes

//formsubmit

//useeffect




  return (
    <div className="App">
      <header><h1>User Onboarding!</h1></header>
     
     <Form />


    </div>
  );
}

export default App;
