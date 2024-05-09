import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { settlePayments } from "../utils/settlePayments";
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";
import paymentQR from "../assets/images/paymentQR.jpg";

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
			<section className="my-10 px-10 mx-auto">
				{transactions?.map(({ payer, receiver, cost }, index) => {
					return (
						<div
							key={index}
							tabIndex={index}
							className="collapse border rounded-md my-10">
							<div className="collapse-title text-lg font-medium px-5">
								<div className="grid grid-cols-3 justify-items-center">
									{payer} <ArrowLongRightIcon className="w-5" /> {receiver}
								</div>
								<div className="text-center">{cost} THB</div>
								<p className="text-center pt-3 text-sm">(Click to pay)</p>
							</div>
							<div className="collapse-content">
								<img className="rounded-lg" src={paymentQR} alt="Payment QR" />
							</div>
						</div>
					);
				})}
			</section>
		</>
	);
};

export default Settle;
