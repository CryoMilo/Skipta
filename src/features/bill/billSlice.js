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
		updateDivideEqualBill: (state, action) => {
			const { id, ...updatedFields } = action.payload;
			const existingBill = state.data.find((bill) => bill.id === id);
			if (existingBill) {
				Object.assign(existingBill, updatedFields);
			}
		},
	},
});

export const { addBill, resetBill, updateDivideEqualBill } = billSlice.actions;

export default billSlice.reducer;
