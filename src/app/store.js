import { configureStore, combineReducers } from "@reduxjs/toolkit";
import profileSlice from "../features/profile/profileSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import billSlice from "../features/bill/billSlice";
import queueSlice from "../features/queue/queueSlice";

const persistConfig = {
	key: "root",
	storage,
};

const rootReducer = combineReducers({
	profile: profileSlice,
	bill: billSlice,
	queue: queueSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
});
