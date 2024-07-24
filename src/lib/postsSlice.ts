'use client'

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getLoggedUserData } from "./userslice";
import { Content } from "next/font/google";

const headers:any = {
    token: 
   window.localStorage.getItem('userToken') ,
   "Content-Type": "application/json",
    
   
}

const headerss:any = {
    token: 
   localStorage.getItem('userToken') ,
   "Content-Type": "application/json",
  "Accept": "application/json",
}




let initialState = {allPosts:[],userPosts:[],isLoading:true,isError:null,comments:[]}

export let getAllPosts = createAsyncThunk('posts/getAllPosts',async ()=>{
    const response = await fetch(`https://linked-posts.routemisr.com/posts?limit=50`,{
        method:'GET',
        headers:headers,
          
    });
    let data = await response.json();
    console.log(data);
    
    return data;
    
});

export let addPost = createAsyncThunk('posts/addPost',async (FormData:any)=>{
    let response = await fetch(`https://linked-posts.routemisr.com/posts`,{
        body:FormData,
        method:'POST',
        headers:headers
    });
    let data = await response.json();
    
    return data;
    
})


export let removepost = createAsyncThunk('posts/removepost',async (PostID:any)=>{
    let response = await fetch(`https://linked-posts.routemisr.com/posts/${PostID}`,{
       method:'DELETE',
        headers:headerss
    });
    let data = await response.json();
   
    return data;
    
})

export const getUserPosts = createAsyncThunk('posts/getUserPosts', async (userId:any) => {
    const response = await fetch(`https://linked-posts.routemisr.com/users/${userId}/posts?limit=4`, {
        headers:headers,
        

        
    },
);

    const data = await response.json();

    return data;
});

export let addComment = createAsyncThunk('posts/addComment',async (formData:any)=>{
   const response = await fetch(`https://linked-posts.routemisr.com/comments`,{
        body:JSON.stringify(formData),
        method:'POST',
        headers:headerss,
        
       
    });
    
    
    let data = await response.json();
    return data;
    
})

export const getUserComments = createAsyncThunk('posts/getUserComments', async (postId:any) => {
    const response = await fetch(`https://linked-posts.routemisr.com/posts/${postId}/comments`, {
        headers:headers,
        

        
    },
);

    const data = await response.json();
   
    return data;
});

export let removecomment = createAsyncThunk('posts/removecomment',async (commentID:any)=>{
    let response = await fetch(`https://linked-posts.routemisr.com/comments/${commentID}`,{
       method:'DELETE',
        headers:headerss
    });
    let data = await response.json();
   
    return data;
    
})
let postsSlice = createSlice({
    name: 'posts',
    initialState:initialState,
    extraReducers:(builder)=>{

     builder.addCase(getAllPosts.fulfilled,(state,action)=>{
        state.isLoading = false;
        state.allPosts = action.payload.posts;
        

     }),
     builder.addCase(getAllPosts.pending,(state,action)=>{
        state.isLoading = true;
     }),
   
     builder.addCase(addPost.fulfilled,(state:any,action)=>{
        console.log('added');
        state.isLoading = false;
        state.allPosts.push(action.payload) ;
        
     });

     builder.addCase(removepost.fulfilled,(state:any,action)=>{
        console.log('removed');
        state.userPosts = state.userPosts.filter((post:any) => post._id !== action.payload.id);
        
        
       
        
        
     });
     builder.addCase(getUserComments.fulfilled,(state,action)=>{
        
        state.comments = action.payload.comments
       
        
       
        
        
     });
     builder.addCase(getUserPosts.fulfilled,(state,action)=>{
        state.isLoading = false;
        state.userPosts = action.payload.posts;

     });
     builder.addCase(addComment.fulfilled, (state, action) => {
        
        state.isLoading = false;

        
        
        
        
        
        });

        builder.addCase(removecomment.fulfilled, (state:any, action) => {
        
            console.log(action.payload);
            state.comments = state.comments.filter((comment:any) => comment._id !== action.payload.id);
            
    
            
            
            
            
            
            });
    
     },
     reducers:{
       
     }
});

export let PostsReducer = postsSlice.reducer;

// export let {updateUserProfileImage} = postsSlice.actions;