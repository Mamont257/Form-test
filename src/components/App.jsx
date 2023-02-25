import React, { Component } from "react";
// import { nanoid } from 'nanoid'
import { Formik, Form } from 'formik';
import { LoginForm } from "./LoginForm";




export class App extends Component {


  render() {
    return (
      <div>
        <LoginForm/>
      </div>
    )
  }
}







// export const App = () => {
//   return (
//     <div>
//       React homework template
//     </div>
//   );
// };
