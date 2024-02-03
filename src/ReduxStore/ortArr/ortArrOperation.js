import { createAsyncThunk } from '@reduxjs/toolkit';
import { get, ref } from 'firebase/database';
import { db } from 'Server/firebaseConfig.js';

export const fetchOrtArr = createAsyncThunk(
  'ortArr/fetchOrtArr',
  async (_, { rejectWithValue }) => {
    try {
      const dbRef = ref(db, 'OrtArr/');
      
      const snapshot = await get(dbRef);

      const data = snapshot.val();

      if (!data) {
        return [];
      }

      const result = Object.entries(data).map(([id, value]) => ({
        id,
        ...value,
      }));

      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
