import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	data: [
		{
			id: 1,
			username: "John",
			img: "https://i.pinimg.com/736x/50/d5/1d/50d51d96839a9463bd261404134acd1d.jpg",
			active: true,
		},
		{
			id: 2,
			username: "Mia",
			img: "https://i.pinimg.com/736x/d6/e1/0a/d6e10a79f543530e51c36f3c421299df.jpg",
			active: false,
		},
		{
			id: 3,
			username: "Damian",
			img: "https://i.pinimg.com/736x/6a/e8/27/6ae827fcca32bf53c2a286efeb0b145d.jpg",
			active: false,
		},
		{
			id: 4,
			username: "Aurora",
			img: "https://i.pinimg.com/564x/67/b4/c6/67b4c6e04a2c686076847241cd0cb88c.jpg",
			active: false,
		},
	],
};

export const profileSlice = createSlice({
	name: "profile",
	initialState,
	reducers: {
		addProfile: (state, action) => {
			state.data.push({ ...action.payload });
		},
		resetAll: (state) => {
			state.data = initialState.data;
		},
	},
});

export const { addProfile, resetAll } = profileSlice.actions;

export default profileSlice.reducer;
