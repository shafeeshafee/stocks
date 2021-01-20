import { useState, useEffect } from "react";
import axios from "axios";
import "../css/StockInfo.css";

const Snap = () => {
	const [SnapData, setSnapData] = useState("");

	const fetchSNAPData = async () => {
		const SNAP = `${process.env.REACT_APP_SNAP_URL}${process.env.REACT_APP_APP_KEY}`;

		const response = await axios
			.get(SNAP)
			.then((res) => setSnapData(res.data))
			.catch((error) => console.log(error));
	};

	useEffect(() => {
		fetchSNAPData();
	}, []);

	return (
		<div className="stock-container">
			<div>
				<div className="stock-titles">
					<h4>{SnapData.symbol}</h4>
					<p>{SnapData.latestPrice}</p>
				</div>
				<div className="stock-numbers">
					<p className="company-name">{SnapData.companyName}</p>
					<p className="change-percent">{(SnapData.changePercent * 100).toFixed(2)}%</p>
				</div>
			</div>
		</div>
	);
};

export default Snap;
