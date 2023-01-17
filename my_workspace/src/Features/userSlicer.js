import {createSlice} from '@reduxjs/toolkit';

export const userSlicer = createSlice({
    name: "user",
    mark:"score",
    initialState:{
       user:null,
       score:0,
    },
    reducers:{
        login:(state,action)=>{
            state.user = action.payload
        },
        logout:(state)=>{
            state.user= null
        },
        scored:(state,action)=>{
            state.score = action.payload
        },
        socredout:(state)=>{
            state.score = null
        }
    },
});

export const{login,logout,scored,socredout}= userSlicer.actions;

//export const selectUser =(state)=> state.user.user.score.score;

export default userSlicer.reducer;

