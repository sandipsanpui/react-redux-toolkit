import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "User",
    initialState: [],
    reducers: {
        addNewUser(state, action) {
            state.push(action.payload);
        },
        removeUser(state, action) {},
        deleteAllUsers(state, action) {
            state = [];
            return state;
        }
    }
})

export const { addNewUser, deleteAllUsers } = userSlice.actions;