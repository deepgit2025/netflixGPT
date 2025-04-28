import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movieData:{}
};
export const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers : {
        addMovieDetails :(state, action)=>{
            const {movieName, movie} =action.payload;
            state.movieData[movieName] = movie;
        },
        removeMovieDetails: (state, action)=>{
            const {movieName} =action.payload;
            state.movieData[movieName] = null;
        }
    }
})
export const {addMovieDetails, removeMovieDetails} = movieSlice.actions;
export default movieSlice.reducer;