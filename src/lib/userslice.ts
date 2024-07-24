

import { Token } from "@mui/icons-material";
import { AvatarClassKey } from "@mui/material";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Router, useRouter } from "next/router";




let initialState = {loggedin:true,message:'',userData:[],loggedmessage:'',registermessok:'',registermessnot:'',loginmessok:'',loginmessnot:''};
const headers:any ={
     token:localStorage.getItem('userToken'),
  
}

// const[userLoggedin,setuserLoggedin] = useState()
export const getUserDetails = createAsyncThunk('users/getUserDetails', async (formData:any) => {
    const response = await fetch(`https://linked-posts.routemisr.com/users/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    });

    const data = await response.json();

    return data;
});

export const userLogin = createAsyncThunk('users/userLogin', async (formData:any) => {
    const response = await fetch(`https://linked-posts.routemisr.com/users/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    });

    const data = await response.json();
    console.log(data); 
    return data;
});

// export const resetPassword= createAsyncThunk('users/resetPassword', async (formValues) => {
//     const response = await fetch(`https://linked-posts.routemisr.com/users/change-password`, {
//         method: 'PATCH',
//         headers:headers,
//         body: JSON.stringify(formValues)

        
//     },
// );

//     const data = await response.json();
//     console.log(data); 
//     return data;
// });

export const UploadImage = createAsyncThunk('users/UploadImage', async (FormData:any) => {
    const response = await  fetch (`https://linked-posts.routemisr.com/users/upload-photo`, {
        
        method: 'PATCH',
        headers:headers,
        body:FormData ,
        
    
    },
);

    const data = await response.json();
    console.log(data); 
   
    
    return data;
});

export const getLoggedUserData = createAsyncThunk('users/getLoggedUserData', async () => {
    const response = await fetch(`https://linked-posts.routemisr.com/users/profile-data`, {
        headers:headers,
        

        
    },
);

    const data = await response.json();
   
    
    return data;
});



const userSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getUserDetails.fulfilled, (state, action) => {
           state.registermessok = action.payload.message
           state.registermessnot = action.payload.error
          
       
        });

      
    
        builder.addCase(userLogin.fulfilled, (state, action) => {
            console.log('Logged');
            state.loginmessok = action.payload.message
            state.loginmessnot = action.payload.error
           
            if (action.payload && action.payload && action.payload.token) {
                localStorage.setItem('userToken',action.payload.token)
            }
               

            
            
           
            
            
            
        
        });

        builder.addCase(userLogin.rejected, (state:any, action:any) => {
          console.log('Not Logged');
          state.loggedmessage = action?.payload.error
            
            
            
        
        });

        builder.addCase(getLoggedUserData.fulfilled, (state, action) => {
            
            state.userData = action.payload.user;
            
        });


      
    },
    reducers: {}
});

export const usersReducer = userSlice.reducer;
