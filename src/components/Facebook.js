import { useState, useEffect } from "react";
import axios from "axios";
import "../css/StockInfo.css";

const Facebook = () => {
	const [FacebookData, setFacebookData] = useState("");

	const fetchFACEBOOKData = async () => {
		const FB = `${process.env.REACT_APP_FB_URL}${process.env.REACT_APP_APP_KEY}`;

		const response = await axios
			.get(FB)
			.then((res) => setFacebookData(res.data))
			.catch((error) => console.log(error));
	};

	useEffect(() => {
		fetchFACEBOOKData();
	}, []);

	const checkStockStatus = FacebookData.changePercent < 0 ? "down" : "up";

	return (
		<div className="stock-container">
			<div>
				<div className="stock-titles">
					<h4>{FacebookData.symbol}</h4>
					<p>${FacebookData.latestPrice}</p>
				</div>
				<div className="stock-numbers">
					<p className="company-name">{FacebookData.companyName}</p>
					<p className={checkStockStatus}>
						{FacebookData.changePercent > 0 ? "+" : "-"}
						{(FacebookData.changePercent * 100).toFixed(2)}%
					</p>
				</div>
			</div>
		</div>
	);
};

export default Facebook;
