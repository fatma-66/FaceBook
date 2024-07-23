import { createSlice } from "@reduxjs/toolkit";

// let initial = {counter:0}

let counterSlice = createSlice({
    name: 'counter',
    initialState:{count:0},
    reducers:{
        increase:(state,action)=>{
        // return {count:state.count+1}
           state.count += action.payload
        }, decrease:()=>{
            console.log("increase");

        }
    }
});

export let counterReducer = counterSlice.reducer;

export let {increase,decrease}= counterSlice.actions