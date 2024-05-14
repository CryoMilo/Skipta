import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Voucher from "./pages/Voucher";
import Settle from "./pages/Settle";

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
		path: "/voucher",
		element: <Voucher />,
	},
	{
		path: "/settle",
		element: <Settle />,
	},
]);

function App() {
	return (
		<div className="max-w-[800px] py-10 mx-auto">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
