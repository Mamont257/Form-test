import React from "react";
import { Formik, Form, Field } from 'formik';


export const LoginForm = () => {

        return (<Formik initialValues={{ name: "H"}} onSubmit = { value => { }}>
            <Form>
                <label>
                    Name
                    <Field type="text" name="name"/>
                </label>
                <button type='submit'>Submit</button>
            </Form>
        </Formik>)
}