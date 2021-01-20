import { useState, useEffect } from "react";
import axios from "axios";
import "../css/StockInfo.css";

const Ndaq = () => {
	const [NdaqData, setNdaqData] = useState("");

	const fetchNDAQData = async () => {
		const NDAQ = `${process.env.REACT_APP_NDAQ_URL}${process.env.REACT_APP_APP_KEY}`;

		const response = await axios
			.get(NDAQ)
			.then((res) => setNdaqData(res.data))
			.catch((error) => console.log(error));
	};

	useEffect(() => {
		fetchNDAQData();
	}, []);

	return (
		<div className="stock-container">
			<div>
				<div className="stock-titles">
					<h4>{NdaqData.symbol}</h4>
					<p>{NdaqData.latestPrice}</p>
				</div>
				<div className="stock-numbers">
					<p className="company-name">{NdaqData.companyName}</p>
					<p className="change-percent">{(NdaqData.changePercent * 100).toFixed(2)}%</p>
				</div>
			</div>
		</div>
	);
};

export default Ndaq;
