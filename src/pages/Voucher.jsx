import Navbar from "../components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { resetVouncher } from "../features/bill/billSlice";
import BillSegment from "../components/BillSegment";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Voucher = () => {
	const dispatch = useDispatch();
	const billData = useSelector((state) => state.bill);
	const navigate = useNavigate();

	const [isBillExists, setBillExists] = useState(false);

	useEffect(() => {
		const hasAllIndividualCosts = billData.data.some(
			(bill) => !bill.individualCosts || bill.individualCosts.length === 0
		);
		setBillExists(hasAllIndividualCosts);
	}, [billData.data]);

	return (
		<>
			<Navbar />
			<h3 className="text-center mt-10 text-xl">Voucher</h3>
			{billData.data.length === 0 && (
				<p className="text-center my-11">No Voucher to resolve yet</p>
			)}
			{billData?.data.map((bill) => (
				<div key={bill.id}>
					<BillSegment billId={bill.id} />
				</div>
			))}
			<div className="flex gap-2 my-10 w-full max-w-[400px] mx-auto px-5">
				<div className="w-1/2">
					<button
						disabled={isBillExists}
						onClick={() => navigate("/settle")}
						className="btn bg-primary w-full">
						Calculate
					</button>
				</div>

				<div className="w-1/2">
					<button
						type="button"
						onClick={() => dispatch(resetVouncher())}
						className="btn bg-secondary w-full">
						Reset
					</button>
				</div>
			</div>
		</>
	);
};

export default Voucher;
