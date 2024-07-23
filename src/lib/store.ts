import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counterslice";
import { PostsReducer } from "./postsSlice";
import { usersReducer } from "./userslice";
import { userDataReducer } from "./userdataSlice";


export let store = configureStore({
    reducer: {
        counter: counterReducer,
        posts:PostsReducer,
        users:usersReducer,
        userdata:userDataReducer,
        
        
    }
})