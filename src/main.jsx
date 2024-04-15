import React from "react";
import ReactDOM from "react-dom/client";

import { store } from "./app/store";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App.jsx";

import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

let persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<App />
			</PersistGate>
		</Provider>
	</React.StrictMode>
);
