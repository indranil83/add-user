import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        addUser(state, action) {
            state.push(action.payload)
        },
        removeUser(state, action) { 
            return state.filter((item)=>item.id !==action.payload);
        },
        deleteUsers(state, action) { },
    }
})
export const { addUser,removeUser } = userSlice.actions;
export default userSlice.reducer