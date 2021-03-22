import React from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Form, Switch, Button, Row, Col, Input, Empty } from 'antd';
import { useSelector, useDispatch } from "react-redux";
import { doLogin } from "../store/reducers/users";

const LoginForm = () =>{

    const dispatch = useDispatch()

    const callDispatch =()=>{
        console.log('desde form')
        console.log(doLogin)
        dispatch(doLogin())
    }

    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: Yup.object({
            // firstName: Yup.string()
            //   .max(15, 'Must be 15 characters or less')
            //   .required('Required'),
            // lastName: Yup.string()
            //   .max(20, 'Must be 20 characters or less')
            //   .required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string()
            .min(4, 'Pass must be at least 4 characters long')
            .required('Required'),
        }),
        onSubmit: values => {            
            console.log('primero')
            callDispatch()
            // alert(JSON.stringify(values, null, 2));
        },
    });


    return (
        <form onSubmit={formik.handleSubmit}>

            <div>
                <label htmlFor="email">Email Address</label>
                <Input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
            </div>
            {formik.touched.email && formik.errors.email ? (
                <div>{formik.errors.email}</div>
            ) : null}

            <div>
                <label htmlFor="email">Password</label>
                <Input
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                />
            </div>
            {formik.touched.password && formik.errors.password ? (
                <div>{formik.errors.password}</div>
            ) : null}

            
            

            <button type="submit">Submit</button>
        </form>
    );

}


export default LoginForm;