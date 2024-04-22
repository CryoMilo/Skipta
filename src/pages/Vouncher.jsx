import Navbar from "../components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { resetVouncher } from "../features/bill/billSlice";
import BillSegment from "../components/BillSegment";

const Vouncher = () => {
	const dispatch = useDispatch();
	const billData = useSelector((state) => state.bill);

	return (
		<>
			<Navbar />
			<h3 className="text-center mt-10 text-xl">Vouncher</h3>
			{billData.data.length === 0 && (
				<p className="text-center my-11">No Vouncher to resolve yet</p>
			)}
			{billData?.data.map((bill) => (
				<div key={bill.id}>
					<BillSegment billId={bill.id} />
				</div>
			))}
			<div className="flex gap-2 my-10 w-full max-w-[400px] mx-auto">
				<div className="w-1/2">
					<div className="btn bg-primary w-full">Calculate</div>
				</div>

				<div className="w-1/2">
					<button
						onClick={() => dispatch(resetVouncher())}
						className="btn bg-secondary w-full">
						Reset
					</button>
				</div>
			</div>
		</>
	);
};

export default Vouncher;
