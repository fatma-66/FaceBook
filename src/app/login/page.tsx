'use client'
import React from 'react';
import { Box, Button, FormControl, FormControlLabel, FormLabel, Input, Radio, RadioGroup, TextField } from '@mui/material';
import { getLoggedUserData, getUserDetails, userLogin } from '@/lib/userslice';
import { Formik, Form, Field, useFormik, ErrorMessage, FormikValues } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Alert from '@mui/material/Alert';


export default function Login (){

  var token = {
    token: localStorage.getItem('userToken')
  }

  
  let router = useRouter()
  let validate = yup.object().shape({
   
    email: yup.string().email('email is invalid').required("Email is required"),
    password: yup.string().matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,'you must enter a valid password').required("password is required"),
    
  })



let dispatch = useDispatch<any>();
  const [value, setValue] = React.useState('female');
  const { isLoading, isError ,loginmessok,loginmessnot} = useSelector((state:any) => state.users);


  const handleLogin = async(formValues:any) => {
      const response = await dispatch(userLogin(formValues));
      if (response.payload.error) {
        let x = response.payload.error
         alert (x)
        
      }
      else {
        
         router.push('/');
      }

  };

  // {
  //   loginmessnot?
  //      <Alert severity="error" >{loginmessnot}</Alert>
  
  //  :null


  // }

    return<>
    
    <Box>
      <Formik
        initialValues ={{
         
          email: '',
          password: '',
          
        }}
        validationSchema={validate}
        onSubmit={handleLogin}
      >
        {({ errors, touched, handleChange, handleBlur, values ,handleSubmit}) => (
          <Form onSubmit={handleSubmit} style={{ width: '50%', margin: '10px auto', display: 'flex', flexDirection: 'column', padding: '30px', justifyContent: 'start' }}>
           
            <Field
              as={TextField}
              name="email"
              label="Email"
              variant="standard"
              style={{ margin: '20px' }}
              error={touched.email && !!errors.email}
              helperText={<ErrorMessage name="email" />}
            />
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
            <Button  type="submit" variant="contained" color="primary" style={{ cursor: 'pointer', width: '30%', margin: '20px auto' }}>
            Login Now
            </Button>
            <Link href='/register' style={{textDecoration:'none',color:'black',margin:'auto'}}>Don't have an account yet? <span style={{color:'black',fontWeight:'bolder'}}> Register</span></Link>
          </Form>
        )}
      </Formik>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error: {isError}</p>}
    </Box>
    

    </>
}