import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	data: [
		{
			id: crypto.randomUUID(),
			username: "John",
			img: "https://i.pinimg.com/736x/50/d5/1d/50d51d96839a9463bd261404134acd1d.jpg",
			active: true,
		},
		{
			id: crypto.randomUUID(),
			username: "Mia",
			img: "https://i.pinimg.com/736x/d6/e1/0a/d6e10a79f543530e51c36f3c421299df.jpg",
			active: false,
		},
		{
			id: crypto.randomUUID(),
			username: "Damian",
			img: "https://i.pinimg.com/736x/6a/e8/27/6ae827fcca32bf53c2a286efeb0b145d.jpg",
			active: false,
		},
		{
			id: crypto.randomUUID(),
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
		updateProfile: (state, action) => {
			const { id, ...updatedFields } = action.payload;
			const existingProfile = state.data.find((profile) => profile.id === id);
			if (existingProfile) {
				Object.assign(existingProfile, updatedFields);
			}
		},
		deleteProfile: (state, action) => {
			const { id } = action.payload;

			state.data = state.data.filter((profile) => profile.id !== id);
		},
		resetAll: (state) => {
			state.data = initialState.data;
		},
	},
});

export const { addProfile, resetAll, updateProfile, deleteProfile } =
	profileSlice.actions;

export default profileSlice.reducer;
