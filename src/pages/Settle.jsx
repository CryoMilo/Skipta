import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { settlePayments } from "../utils/settlePayments";
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";
import ReceiverBankQRCode from "../components/ReceiverBankQRCode";

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
			<section className="my-10 max-w-[600px] mx-auto px-10">
				{transactions?.map(({ payer, receiver, cost }, index) => {
					return (
						<div
							key={index}
							tabIndex={index}
							className="collapse border rounded-md my-10 bg-gradient-to-tr from-violet-500 to-orange-300 text-black border-none shadow-xl">
							<div className="collapse-title text-lg font-medium px-5">
								<div className="grid grid-cols-3 justify-items-center">
									{payer} <ArrowLongRightIcon className="w-5" /> {receiver}
								</div>
								<div className="text-center">{cost} THB</div>
								<p className="text-center pt-3 text-sm select-none">
									(Click to pay)
								</p>
							</div>
							<div className="collapse-content">
								<div className="my-10 max-w-[400px] mx-auto">
									<table className="table w-full my-10">
										<tbody className="text-center">
											<tr className="border-none">
												<th>Account Number</th>
												<td>{bills.data[0].payer.bankAccountNumber}</td>
											</tr>
											<tr className="border-none">
												<th>Account Name</th>
												<td>{bills.data[0].payer.bankAccountName}</td>
											</tr>
											<tr className="border-none">
												<th>Bank Name</th>
												<td>{bills.data[0].payer.bankName}</td>
											</tr>
										</tbody>
									</table>
								</div>
								<ReceiverBankQRCode receiver={receiver} />
							</div>
						</div>
					);
				})}
			</section>
		</>
	);
};

export default Settle;
