import React from "react";
import { Formik, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import { Form, FormField} from "./LoginForm.styled";




const ContactSchema = Yup.object().shape({
    name: Yup.string()    
        .min(2, 'Too Short!')
        .max(10, 'Too Long!')
        .required('Required'),
 });


export const LoginForm = () => {

    const handleSubmit = (value, {resetForm}) => {
      console.log(value);
    //   console.log(actions);
        resetForm();
    };

    return (
        <Formik
            initialValues={{ name: "" }}
            validationSchema={ContactSchema}
            onSubmit={handleSubmit}>
            <Form>
                <FormField>
                    Name
                    <Field type="text" name="name"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required />
                    <ErrorMessage name="name"/>
                </FormField>
                <button type='submit'>Add contact</button>
            </Form>
        </Formik>)
}