import React, { Component } from "react";
// import { nanoid } from 'nanoid'
import { Formik, Form } from 'formik';
import { LoginForm } from "./RegisrForm/LoginForm";







export class App extends Component {
  state = {
    contacts: [],
    name: ''
  }

  render() {
    return (
      <div>
        <h2>Phonebook</h2>
        <LoginForm/>
      </div>
    )
  }
}


