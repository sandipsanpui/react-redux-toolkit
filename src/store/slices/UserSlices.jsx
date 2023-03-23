import { createSlice } from "@reduxjs/toolkit";
import { deleteStudentById, getStudentList, addNewStudent, deleteAllStudent } from "../actions";

const initialState = {
    data: [],
    isLoading: false,
    isSuccess: false,
    errorMessage: ""
}

export const userSlice = createSlice({
    name: "User",
    initialState: initialState,
    reducers: {
        addNewUser(state, action) {
            console.log(import.meta.env.VITE_REACT_APP_backendURL)
            state.push(action.payload);
        },
        removeUser(state, action) {
            state.splice(action.payload, 1);
        }
    },
    extraReducers(builder) {
        builder.addCase(getStudentList.pending, (state, action) => {
            state.isLoading = true;
        }),
        builder.addCase(getStudentList.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = action.payload;
        }),
        builder.addCase(getStudentList.rejected, (state, action) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.errorMessage = action.payload;
        }),
        builder.addCase(deleteStudentById.pending, (state, action) => {
            state.isLoading = true;
            state.isSuccess = false;
        }),
        builder.addCase(deleteStudentById.fulfilled, (state, action) => {
            let userDataList = state.data;
            const index = userDataList && userDataList.findIndex((user) => user.id === action.payload);
            if(index > -1) {
                userDataList.splice(index, 1);
            }
            state.data = userDataList;
            state.isLoading = false;
            state.isSuccess = true;
        }),
        builder.addCase(deleteStudentById.rejected, (state, action) => {
            
        }),
        builder.addCase(addNewStudent.pending, (state, action) => {
            state.isLoading = true;
        }),
        builder.addCase(addNewStudent.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data.push(action.payload);
        }),
        builder.addCase(addNewStudent.rejected, (state, action) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.errorMessage = action.payload;
        }),
        builder.addCase(deleteAllStudent.pending, (state, action) => {
            state.isLoading = true;
        }),
        builder.addCase(deleteAllStudent.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.data = []
        }),
        builder.addCase(deleteAllStudent.rejected, (state, action) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.errorMessage = action.payload;
        })
    }
})

export default userSlice.reducer;