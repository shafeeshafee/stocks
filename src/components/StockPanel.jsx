import Facebook from "./Facebook";
import Ndaq from "./Ndaq";
import Snap from "./Snap";
import Spy from "./Spy";
import Search from "./Search";
import Heading from "./Heading";
import "../css/StockPanel.css";

export default function StockPanel() {
	return (
		<div className="panel">
			<Heading />
			<Facebook />
			<Snap />
			<Ndaq />
			<Spy />
			<div>
				<Search />
			</div>
		</div>
	);
}
