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
		resetBill: (state, action) => {
			const { id } = action.payload || {};
			state.data = state.data.map((bill) => {
				if (bill.id === id) {
					delete bill.individualCosts;
				}
				return bill;
			});
		},
		resetVouncher: (state) => {
			state.data = initialState.data;
		},
		updateBill: (state, action) => {
			const { id, individualCosts } = action.payload;
			const existingBillIndex = state.data.findIndex((bill) => bill.id === id);

			if (existingBillIndex !== -1) {
				state.data[existingBillIndex].individualCosts = individualCosts;
			}

			return state;
		},
	},
});

export const { addBill, resetBill, updateBill, resetVouncher } =
	billSlice.actions;

export default billSlice.reducer;
