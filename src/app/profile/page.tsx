'use client'
import { getLoggedUserData } from '@/lib/userslice';
import { Box, Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SinglePost from '../_component/singlepost/page';
import { RestartAlt, RestartAltSharp } from '@mui/icons-material';
import { getUserPosts } from '@/lib/postsSlice';
import SingleUserPost from '../_component/singleuserpost/page';
import CircularProgress from '@mui/material/CircularProgress';





export default function Profile (){

let dispatch = useDispatch()
    const { userData} = useSelector((state:any) => state.users);
    let {allPosts,isLoading,isError,userPosts} = useSelector((state:any)=> state.posts)
    
    React.useEffect(() => {
        const token = localStorage.getItem('userToken');
        if (token) {
          dispatch(getLoggedUserData());
        }
      }, [dispatch]);


   React.useEffect(() => {
        if (userData?._id) {
          dispatch(getUserPosts(userData._id));
        }
      }, [dispatch, userData]);


    return<>

    

<div className='profile-pho'>
    <img src={userData?.photo} style={{width:'100%',height:'100%'}} alt='profile' />


</div>

<Box>

<Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 0 }} 
  justifyContent="center"
  alignItems="center"
  className="grid"
>
  {userPosts?.map((post:any)=>
  <Grid key={post._id} sx={{width:'100%'}} item xs={8}><SingleUserPost postdetails={post} userDetalis={userData}/></Grid>
)}
</Grid>

</Box>





 
    </>
}
