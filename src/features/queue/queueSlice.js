import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	data: [
		{
			id: crypto.randomUUID(),
			buyerName: "Damian",
			menuName: "Mont Ti Thope",
			mainDishSpiceLvl: 0,
			soupSpiceLvl: 0,
			coriander: false,
			addins: false,
			extraRequest: "",
			orderCompleted: true,
		},
		{
			id: crypto.randomUUID(),
			buyerName: "John",
			menuName: "Mont Ti Thope",
			mainDishSpiceLvl: 0,
			soupSpiceLvl: 0,
			coriander: false,
			addins: false,
			extraRequest: "",
			orderCompleted: false,
		},
		{
			id: crypto.randomUUID(),
			buyerName: "Aurora",
			menuName: "Mont Ti Thope",
			mainDishSpiceLvl: 0,
			soupSpiceLvl: 0,
			coriander: false,
			addins: false,
			extraRequest: "",
			orderCompleted: false,
		},
		{
			id: crypto.randomUUID(),
			buyerName: "Mia",
			menuName: "Mont Ti Thope",
			mainDishSpiceLvl: 0,
			soupSpiceLvl: 0,
			coriander: false,
			addins: false,
			extraRequest: "",
			orderCompleted: false,
		},
	],
};

export const queueSlice = createSlice({
	name: "queue",
	initialState,
	reducers: {
		addQueue: (state, action) => {
			state.data.push({ ...action.payload });
		},
		updateQueue: (state, action) => {
			const { id, ...updatedFields } = action.payload;
			const exisitingQueue = state.data.find((queue) => queue.id === id);
			if (exisitingQueue) {
				Object.assign(exisitingQueue, updatedFields);
			}
		},
		deleteQueue: (state, action) => {
			const { id } = action.payload;

			state.data = state.data.filter((queue) => queue.id !== id);
		},
		resetAll: (state) => {
			state.data = initialState.data;
		},
	},
});

export const { addQueue, resetAll, updateQueue, deleteQueue } =
	queueSlice.actions;

export default queueSlice.reducer;
