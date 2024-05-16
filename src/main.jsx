import React from "react";
import ReactDOM from "react-dom/client";

import { store } from "./app/store";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App.jsx";
import "react-toastify/dist/ReactToastify.css";

import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { ToastContainer } from "react-toastify";

let persistor = persistStore(store);

const theme = localStorage.getItem("theme");

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<App />
				<ToastContainer
					position="top-center"
					autoClose={1000}
					hideProgressBar={true}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover={false}
					theme={theme === "dracula" ? "dark" : "light"}
				/>
			</PersistGate>
		</Provider>
	</React.StrictMode>
);
