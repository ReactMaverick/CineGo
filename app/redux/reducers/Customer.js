import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: null,
};

export const customerReducer = createSlice({
  name: 'userDetail',
  initialState,
  reducers: {
    userDetails: (state, action) => {
      state.value = action.payload;
    },
    logOut: state => {
      state.value = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const {userDetails, logOut} = customerReducer.actions;

export default customerReducer.reducer;
