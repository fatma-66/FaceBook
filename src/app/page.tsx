'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { useSelector } from "react-redux";
import { getAllPosts } from "@/lib/postsSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import SinglePost from "./_component/singlepost/page";
import { Box, Grid } from "@mui/material";
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { useRouter } from "next/navigation";
import { getLoggedUserData } from "@/lib/userslice";
import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';




export default function Home() {
 const router = useRouter()
let dispatch = useDispatch<any>()
 let {count} = useSelector((state:any)=> state.counter)
 let {allPosts,isLoading,isError} = useSelector((state:any)=> state.posts)
 let {userData} = useSelector((state:any)=> state.users)

 useEffect(()=>{
  dispatch(getAllPosts())
 },[])








if (!localStorage.getItem('userToken')) {
  router.push('/login')
}



  return  <>
    
     
      <Box>
{
isLoading?<h4 style={{textAlign:"center",padding:"50px 0px"}}><CircularProgress/></h4>:
<Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 0 }} 
  justifyContent="center"
  alignItems="center"
  className="grid"
>
  {allPosts?.map((post:any)=>
  <Grid key={post._id}  item xs={4}><SinglePost postdetails={post} userDetalis={userData}/></Grid>
)}
</Grid>
    }
</Box>

  
    </>
  
}
