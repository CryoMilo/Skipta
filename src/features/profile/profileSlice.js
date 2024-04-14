import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	data: [
		{
			id: 1,
			name: "John",
			img: "https://xsgames.co/randomusers/avatar.php?g=pixel",
			active: true,
		},
		{
			id: 2,
			name: "Mia",
			img: "https://xsgames.co/randomusers/avatar.php?g=pixel",
			active: false,
		},
		{
			id: 3,
			name: "Damian",
			img: "https://xsgames.co/randomusers/avatar.php?g=female",
			active: false,
		},
		{
			id: 4,
			name: "Aurora",
			img: "https://xsgames.co/randomusers/avatar.php?g=male",
			active: false,
		},
	],
};

export const profileSlice = createSlice({
	name: "profile",
	initialState,
	reducers: {
		addProfile: (state, action) => {
			state.data.push({ id: state.data.length + 2, ...action.payload });
		},
	},
});

export const { addProfile } = profileSlice.actions;

export default profileSlice.reducer;
