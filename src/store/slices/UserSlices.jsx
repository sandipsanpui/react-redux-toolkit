import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "User",
    initialState: [],
    reducers: {
        addNewUser(state, action) {},
        removeUser(state, action) {},
        deleteAllUsers(state, action) {}
    }
})