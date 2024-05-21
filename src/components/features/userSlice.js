// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: 'YourName',
  email: 'Your@email',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
    }
  }
});

export const { setUserData } = userSlice.actions;
export default userSlice.reducer;
