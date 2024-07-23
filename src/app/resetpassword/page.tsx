'use client'
import React from 'react';
import { Box, Button, FormControl, FormControlLabel, FormLabel, Input, Radio, RadioGroup, TextField } from '@mui/material';
import { getUserDetails, resetPassword, userLogin } from '@/lib/userslice';
import { Formik, Form, Field, useFormik, ErrorMessage, FormikValues } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import Link from 'next/link';


export default function ResetPassword (){

  
  let router = useRouter()
  let validate = yup.object().shape({
    password: yup.string().matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,'you must enter a valid password').required("password is required"),
    newPassword: yup.string().oneOf([yup.ref('password')],'password and repassword must be the same').required("rePassword is required"),
    
  })



let dispatch = useDispatch<any>();

  


  const handleReset = async(formValues:any) => {

      dispatch(resetPassword(formValues));
    

  
  };

    return<>
    <Box>
      <Formik
        initialValues ={{
         
          
          password: '',
          newPassword:''
          
        }}
        validationSchema={validate}
        onSubmit={handleReset}
      >
        {({ errors, touched, handleChange, handleBlur, values ,handleSubmit}) => (
          <Form onSubmit={handleSubmit} style={{ width: '50%', margin: '10px auto', display: 'flex', flexDirection: 'column', padding: '30px', justifyContent: 'start' }}>

            <Field
              as={TextField}
              name="password"
              type="password"
              label="Password"
              variant="standard"
              style={{ margin: '20px' }}
              error={touched.password && !!errors.password}
              helperText={<ErrorMessage name="password" />}
            />

<Field
              as={TextField}
              name="newPassword"
              type="password"
              label="newPassword"
              variant="standard"
              style={{ margin: '20px' }}
              error={touched.newPassword && !!errors.newPassword}
              helperText={<ErrorMessage name="newPassword" />}
            />
            <Button  type="submit" variant="contained" color="primary" style={{ cursor: 'pointer', width: '30%', margin: '20px auto' }}>
            Login Now
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
    

    </>
}