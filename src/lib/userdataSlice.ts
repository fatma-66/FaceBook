import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  user: {
    id: '',
    name: '',
    photo: '', // Assuming this is where the user's profile photo URL is stored
  },
  isLoading: false,
  isError: null,
};

const userdataSlice = createSlice({
  name: 'userdata',
  initialState,
  reducers: {
    updateUserProfileImage: (state, action) => {
      const { userId, photo } = action.payload;
      if (state.user.id === userId) {
        state.user.photo = photo;
      }
    },
  },
});

export const { updateUserProfileImage } = userdataSlice.actions;
export let userDataReducer = userdataSlice.reducer;