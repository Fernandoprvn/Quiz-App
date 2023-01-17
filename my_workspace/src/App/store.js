import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../Features/userSlicer';
import markReducer from '../Features/userSlicer';

export const store =  configureStore({
    reducer:{
      user:userReducer,
      mark:markReducer,
  },
});


