'use client'
import React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';


import { alertTitleClasses, Box, Button, FormControl, FormControlLabel, FormLabel, Input, Popover, Radio, RadioGroup, TextField } from '@mui/material';
import { getUserDetails } from '@/lib/userslice';
import { Formik, Form, Field, useFormik, ErrorMessage, FormikValues } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import Link from 'next/link';



export default function Register (){
  
  let validate = yup.object().shape({
    name: yup.string().min(3,"name minlength is 3 letters").max(10,'name Maxlength is 10 letters').required("Username is required"),
    email: yup.string().email('email is invalid').required("Email is required"),
    password: yup.string().matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,'you must enter a valid password').required("password is required"),
    
    rePassword: yup.string().oneOf([yup.ref('password')],'password and repassword must be the same').required("rePassword is required"),
    
    dateOfBirth: yup.date().required('Required'),
     gender: yup.string().required('Required'),
  
  })



let dispatch = useDispatch<any>();
let router = useRouter()
  const [value, setValue] = React.useState('female');
  
  const { isLoading, isError ,loggedmessage,registermessok,registermessnot} = useSelector((state:any) => state.users);
  
  

 
  const handleRegister = (formValues:any) => {
    dispatch(getUserDetails(formValues));
    if(registermessok=="success"){
      router.push('/login')
    }
    
    
  };

  {
    registermessnot?
       <Alert severity="error" >{registermessnot}</Alert>
  
   :null


  }

    return<>
   

    <Box>
      <Formik
        initialValues ={{
          name:'',
          email: '',
          password: '',
          rePassword: '',
          dateOfBirth: '',
          gender: 'female',
        }}
        validationSchema={validate}
        onSubmit={handleRegister}
      >
        {({ errors, touched, handleChange, handleBlur, values ,handleSubmit}) => (
          <Form onSubmit={handleSubmit} style={{ width: '50%', margin: '10px auto', display: 'flex', flexDirection: 'column', padding: '30px', justifyContent: 'start' }}>
            <Field
              as={TextField}
              name="name"
              label="UserName"
              variant="standard"
              style={{ margin: '20px' }}
              error={touched.name && !!errors.name}
              helperText={<ErrorMessage name="name" />}
            />
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
            <Field
              as={TextField}
              name="rePassword"
              type="password"
              label="Re-enter Password"
              variant="standard"
              style={{ margin: '20px' }}
              error={touched.rePassword && !!errors.rePassword}
              helperText={<ErrorMessage name="rePassword" />}
            />
            <Field
              as={TextField}
              name="dateOfBirth"
              type="date"
              label="Date of Birth"
              variant="standard"
              style={{ margin: '20px' }}
              error={touched.dateOfBirth && !!errors.dateOfBirth}
              helperText={<ErrorMessage name="dateOfBirth" />}
              InputLabelProps={{ shrink: true }}
            />
            <FormLabel id="gender-label" style={{ margin: '20px' }}>Gender</FormLabel>
            <RadioGroup
              row
              aria-labelledby="gender-label"
              name="gender"
              value={values.gender}
              onChange={handleChange}
              onBlur={handleBlur}
              style={{ marginLeft: '10px', marginBottom: '20px' }}
            >
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
            <Button type="submit" variant="contained" color="primary" style={{ cursor: 'pointer', width: '30%', margin: '20px auto' }}>
              Register Now
            </Button>
            <Link href='/login' style={{textDecoration:'none',color:'black',margin:'auto'}}>already have account? <span style={{color:'black',fontWeight:'bolder'}}> Login</span></Link>

           
          </Form>
        )}
      </Formik>
      
    </Box>
    
{/* <Box>
<form onSubmit={handleRegister}  style={{width:'50%',margin:'10px auto',display:'flex',flexDirection:'column',padding:'30px',justifyContent:'start'}}>
 <TextField type='text' name='name' id="name" label="UserName" variant="standard" style={{margin:'20px'}}/>
 <TextField type='email' name='e-mail' id="email" label="Email" variant="standard" style={{margin:'20px'}} />
 <TextField type='password' name="password" id="password" label="password" variant="standard" style={{margin:'20px'}} />
 <TextField type='password' name='rePassword' id="repassword" label="rePassword" variant="standard" style={{margin:'20px'}}/>
 <TextField type='date' name='dateofbirth' id="date" label="Date of Birth" variant="standard" style={{margin:'20px'}}/>
 <FormLabel id="demo-radio-buttons-group-label" style={{margin:'20px'}}>Gender</FormLabel>
  <RadioGroup
  sx={{marginLeft:'10px',marginBottom:'20px'}}
 row
    aria-labelledby="demo-radio-buttons-group-label"
    name="gender"
        value={value}
        onChange={handleChange}
        
  >
    <FormControlLabel value="female" control={<Radio />} label="Female" />
    <FormControlLabel value="male" control={<Radio />} label="Male" />
    <FormControlLabel value="other" control={<Radio />} label="Other" />
  </RadioGroup>
 <button type='submit' className='btn' style={{cursor:'pointer',width:'30%'}}>Register Now </button>
 </form>
 
</Box> */}
    </>
}