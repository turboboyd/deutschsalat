import { createSlice } from '@reduxjs/toolkit';
import { handleFulfilledOrtArr } from './ortArrReducer';
import { fetchOrtArr } from './ortArrOperation';

const initialState = {
  ortArr: [],
  error: null,
  isLoading: true,
  status: null,
};

const ortArrlice = createSlice({
  name: 'ortArr',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchOrtArr.fulfilled, handleFulfilledOrtArr);
  },
});


export const ortArrReducer = ortArrlice.reducer;

