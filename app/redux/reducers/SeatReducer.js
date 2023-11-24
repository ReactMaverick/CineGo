import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: false,
};

export const seatReducer = createSlice({
    name: 'seatList',
    initialState,
    reducers: {
        isSeatList: (state, action) => {
            state.value = action.payload;
        }
    }
});
export const { isSeatList } = seatReducer.actions;
export default seatReducer.reducer;