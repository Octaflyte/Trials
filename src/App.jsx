import Home from "./compenents/Home";
import Slider from "./compenents/Slider";
import CardElement from "./compenents/CardElement";
import Roadmap from "./compenents/Roadmap";
import PriceComponent from "./compenents/PriceComponent";
import "./App.css";
import Email from "./compenents/Email";
import Footer from "./compenents/Footer";
function App() {
	const MainComponent = () => {
		return (
			<>
				<Home />
				<Slider />
				<Roadmap />
				<PriceComponent />
				<Email />
				<Footer />
			</>
		);
	};
	return <MainComponent />;
}

export default App;
