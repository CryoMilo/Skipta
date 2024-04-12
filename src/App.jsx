import BasePlate from "./common/BasePlate";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Register from "./pages/Register";

function App() {
	return (
		<div className="max-w-[800px] mx-auto my-10 px-8">
			<BasePlate>
				<Navbar />
				{/* <Home /> */}
				<Register />
			</BasePlate>
		</div>
	);
}

export default App;
