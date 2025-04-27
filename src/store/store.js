import {configureStore} from '@reduxjs/toolkit';
import  userReducer  from '../utils/slices/userSlice';
import movieReducer from '../utils/slices/movieSlice';
export const store = configureStore({
    reducer:{
        user : userReducer,
        movies: movieReducer
    }
});