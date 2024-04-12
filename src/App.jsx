import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/profile/new",
		element: <Profile />,
	},
	{
		path: "/profile/edit/:id",
		element: <Profile />,
	},
]);

function App() {
	return (
		<div className="max-w-[800px] mx-auto my-10 px-8">
			<Navbar />
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
