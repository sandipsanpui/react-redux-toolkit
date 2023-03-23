import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const getStudentList = createAsyncThunk('student/getStudentList', async (page, { rejectWithValue }) => {
  try {
    const { data } = await axios.get(`${import.meta.env.VITE_REACT_APP_backendURL}/student/list`);
    return data.body;
  } catch (error) {
    return rejectWithValue(error.message);
  }
})

export const deleteStudentById = createAsyncThunk('student/deleteById', async(id, { rejectWithValue }) => {
    try {
        const { response } = await axios.delete(`${import.meta.env.VITE_REACT_APP_backendURL}/student/deleteById/${id}`);
        return id;
    } catch {
        return rejectWithValue(error.message);
    }
})

export const addNewStudent = createAsyncThunk('student/add', async(postDataObject, { rejectWithValue }) => {
    try {
        const postData = postDataObject;
        const { data } = await axios.post(`${import.meta.env.VITE_REACT_APP_backendURL}/student/create`, postData);
        return postData;
      } catch (error) {
        return rejectWithValue(error.message);
      }
})

export const deleteAllStudent = createAsyncThunk('student/deleteAllStudent', async({ rejectWithValue }) => {
  try {
      const { data } = await axios.delete(`${import.meta.env.VITE_REACT_APP_backendURL}/student/deleteAllStudent`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
})