import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "User",
    initialState: [],
    reducers: {
        addNewUser(state, action) {
            state.push(action.payload);
        },
        removeUser(state, action) {
            state.splice(action.payload, 1);
        },
        deleteAllUsers(state, action) {
            state = [];
            return state;
        }
    }
})

export const { addNewUser, deleteAllUsers, removeUser } = userSlice.actions;