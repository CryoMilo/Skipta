import BasePlate from "./common/BasePlate";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
	return (
		<div>
			<BasePlate>
				<Navbar />
				<Home />
			</BasePlate>
		</div>
	);
}

export default App;
