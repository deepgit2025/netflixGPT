import { createSlice } from '@reduxjs/toolkit';
const initialState = {
}
export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers : {
        addData :(state,action)=>{
            state.userData = action.payload
        },
        removeData : (state)=>{
            state.userData = null
        }
    }
})

export const {addData, removeData} = userSlice.actions;
export default userSlice.reducer;