import { configureStore, combineReducers } from "@reduxjs/toolkit";
import profileSlice from "../features/profile/profileSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
	key: "root",
	storage,
};

const rootReducer = combineReducers({
	profile: profileSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
});
