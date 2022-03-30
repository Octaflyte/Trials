import { Routes, Route } from "react-router-dom";
import Home from "./compenents/Home";
import Slider from "./compenents/Slider";
function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/slider" element={<Slider />} />
		</Routes>
	);
}

export default App;
