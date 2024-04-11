import BasePlate from "./common/BasePlate";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
	return (
		<div className="max-w-[800px] mx-auto my-10 px-8">
			<BasePlate>
				<Navbar />
				<Home />
			</BasePlate>
		</div>
	);
}

export default App;
