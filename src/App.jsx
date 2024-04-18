import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Vouncher from "./pages/Vouncher";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/profile/new",
		element: <Profile isNew />,
	},
	{
		path: "/profile/edit/:id",
		element: <Profile />,
	},
	{
		path: "/vouncher",
		element: <Vouncher />,
	},
]);

function App() {
	return (
		<div className="max-w-[800px] my-10 mx-auto px-8">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
