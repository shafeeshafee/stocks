import { useState, useEffect } from "react";
import axios from "axios";
import "../css/StockInfo.css";

const Search = () => {
	const [data, setData] = useState("");
	const [stock, setStock] = useState("");

	const handleChange = (event) => setStock(event.target.value);

	const fetchData = async () => {
		const search = `${process.env.REACT_APP_SEARCH_URL}${stock}/quote?token=${process.env.REACT_APP_APP_KEY}`;
		try {
			const response = await axios.get(search);
			setData(response.data); // this will be an object
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	const checkStockStatus = data.changePercent < 0 ? "down" : "up";

	return (
		<div>
			<div className="input">
				<input onChange={handleChange} placeholder="Search company..." />
				<button onClick={fetchData}>Search</button>
			</div>

			<div className="stock-container">
				<div>
					<div className="stock-titles">
						<h4>{data.symbol}</h4>
						<p>
							{data ? "$" : ""}
							{data.latestPrice}
						</p>
					</div>
					<div className="stock-numbers">
						<p className="company-name">{data.companyName}</p>
						<p className={checkStockStatus}>{data.changePercent ? `${(data.changePercent * 100).toFixed(2)}%` : ""}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Search;
