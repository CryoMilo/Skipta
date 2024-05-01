import { createSlice } from "@reduxjs/toolkit";
import { HtaminnThope, MontPhatThope } from "../../constants/marketConstants";

const initialState = {
	data: [
		{
			id: crypto.randomUUID(),
			buyerName: "Damian",
			menuName: MontPhatThope,
			mainDishSpiceLvl: 1,
			soup: false,
			soupSpiceLvl: 2,
			cilantro: false,
			meatball: false,
			orderCompleted: true,
		},
		{
			id: crypto.randomUUID(),
			buyerName: "John",
			menuName: HtaminnThope,
			mainDishSpiceLvl: 1,
			soup: true,
			soupSpiceLvl: 0,
			cilantro: false,
			meatball: true,
			orderCompleted: false,
		},
		{
			id: crypto.randomUUID(),
			buyerName: "Aurora",
			menuName: MontPhatThope,
			mainDishSpiceLvl: 0,
			soup: false,
			soupSpiceLvl: 1,
			cilantro: false,
			meatball: false,
			orderCompleted: false,
		},
		{
			id: crypto.randomUUID(),
			buyerName: "Mia",
			menuName: MontPhatThope,
			mainDishSpiceLvl: 0,
			soup: true,
			soupSpiceLvl: 0,
			cilantro: false,
			meatball: true,
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
