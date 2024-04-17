import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	data: [],
};

export const billSlice = createSlice({
	name: "bill",
	initialState,
	reducers: {
		addBill: (state, action) => {
			state.data.push({ ...action.payload });
		},
		resetBill: (state) => {
			state.data = initialState.data;
		},
	},
});

export const { addBill, resetBill } = billSlice.actions;

export default billSlice.reducer;
