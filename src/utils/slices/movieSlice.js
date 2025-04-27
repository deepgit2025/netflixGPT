import { createSlice } from "@reduxjs/toolkit";

const initialState = {};
export const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers : {
        addMovieDetails :(state, action)=>{
            state.movieData = action.payload;
        },
        removeMovieDetails: (state)=>{
            state.movieData = null;
        }
    }
})
export const {addMovieDetails, removeMovieDetails} = movieSlice.actions;
export default movieSlice.reducer;