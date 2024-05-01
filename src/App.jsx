import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import Home from "./pages/Home";
import Queue from "./pages/Queue";
import Order from "./pages/Order";
// import Profile from "./pages/Profile";
// import Vouncher from "./pages/Vouncher";
// import Settle from "./pages/Settle";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Queue />,
	},
	{
		path: "/order",
		element: <Order />,
	},
	// {
	// 	path: "/profile/new",
	// 	element: <Profile isNew />,
	// },
	// {
	// 	path: "/profile/edit/:id",
	// 	element: <Profile />,
	// },
	// {
	// 	path: "/vouncher",
	// 	element: <Vouncher />,
	// },
	// {
	// 	path: "/settle",
	// 	element: <Settle />,
	// },
]);

function App() {
	return (
		// <div className="max-w-[800px] py-10 mx-auto">
		// 	<RouterProvider router={router} />
		// </div>
		<div>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
