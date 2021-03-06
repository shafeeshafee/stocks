import { useState, useEffect } from "react";
import axios from "axios";
import "../css/StockInfo.css";

const Spy = () => {
	const [SpyData, setSpyData] = useState("");

	const fetchSPYData = async () => {
		const SPY = `${process.env.REACT_APP_SPY_URL}${process.env.REACT_APP_APP_KEY}`;

		const response = await axios
			.get(SPY)
			.then((res) => setSpyData(res.data))
			.catch((error) => console.log(error));
	};

	useEffect(() => {
		fetchSPYData();
	}, []);

	const checkStockStatus = SpyData.changePercent < 0 ? "down" : "up";

	return (
		<div className="stock-container">
			<div>
				<div className="stock-titles">
					<h4>{SpyData.symbol}</h4>
					<p>${SpyData.latestPrice}</p>
				</div>
				<div className="stock-numbers">
					<p className="company-name">{SpyData.companyName}</p>
					<p className={checkStockStatus}>
						{SpyData.changePercent > 0 ? "+" : "-"}
						{(SpyData.changePercent * 100).toFixed(2)}%
					</p>
				</div>
			</div>
		</div>
	);
};

export default Spy;
