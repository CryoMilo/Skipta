import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { settlePayments } from "../utils/settlePayments";

const Settle = () => {
	const bills = useSelector((state) => state.bill);

	const billDataCopy = JSON.parse(JSON.stringify(bills.data));

	const [transactions, setTransactions] = useState([]);

	useEffect(() => {
		setTransactions(settlePayments(billDataCopy));
	}, []);

	return (
		<>
			<Navbar />
			<section className="my-10 max-w-[400px] mx-auto">
				{transactions?.map(({ payer, receiver, cost }, index) => {
					return (
						<div
							key={index}
							tabIndex={index}
							className="collapse collapse-arrow border bg-secondary my-10">
							<div className="collapse-title text-xl font-medium">
								{payer} has to pay {receiver} {cost}
							</div>
							<div className="collapse-content">
								<p>
									tabIndex={index} attribute is necessary to make the div
									focusable
								</p>
							</div>
						</div>
					);
				})}
			</section>
		</>
	);
};

export default Settle;
