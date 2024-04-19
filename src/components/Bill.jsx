import { useDispatch, useSelector } from "react-redux";
import Input from "../common/Input";
import { useForm } from "react-hook-form";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { updateDivideEqualBill } from "../features/bill/billSlice";
import { generateEqualIndividualCosts } from "../utils/generateEqualIndividualCosts";

const Bill = ({ bill }) => {
	const profiles = useSelector((state) => state.profile);
	const dispatch = useDispatch();
	const { control, setValue, watch } = useForm({
		defaultValues: {},
	});

	const allFields = watch();

	console.log(allFields);

	const [payeeList, setPayeelist] = useState(profiles.data);
	const [individualCosts, setIndividualCosts] = useState({});

	const removePayee = (idToRemove, payeeCostToRemove) => {
		setValue(`${payeeCostToRemove}`, undefined);
		setPayeelist(payeeList?.filter((item) => item.id !== idToRemove));
	};

	// useEffect(() => {
	// 	isEquallyDivided &&
	// 		setIndividualCosts(generateEqualIndividualCosts(payeeList, bill.amount));

	// 	dispatch(
	// 		updateDivideEqualBill({
	// 			individualCosts,
	// 			...bill,
	// 		})
	// 	);
	// }, [payeeList]);

	return (
		<form className="my-10 max-w-[400px] mx-auto">
			<div className="flex justify-between gap-10 border-b-primary border-b-[3px] py-3 my-5">
				<div className="text-lg">
					{bill.place} - {bill.amount}
				</div>
				<div className="flex gap-4">
					<div
						onClick={() => {
							setIndividualCosts(
								generateEqualIndividualCosts(payeeList, bill.amount)
							);

							dispatch(
								updateDivideEqualBill({
									individualCosts,
									...bill,
								})
							);
						}}
						className={`bg-secondary cursor-pointer rounded-md p-1`}>
						Divide
					</div>
				</div>
			</div>
			<div className="text-center">
				<div className="border-none grid grid-cols-[0.1fr_2fr_0.5fr] items-center my-4">
					<div></div>
					<div>{bill.payer.username}</div>
					<Input
						name={`${bill.payer.username}`}
						defaultValue={individualCosts?.[bill.payer.username] || ""}
						control={control}
					/>
				</div>
				{payeeList
					.filter((item) => item.id !== bill.payer.id)
					.map((payee) => (
						<div
							key={payee.id}
							className="border-none grid grid-cols-[0.1fr_2fr_0.5fr] items-center my-4">
							<TrashIcon
								className="w-4 h-4 text-red-400 cursor-pointer"
								onClick={() => removePayee(payee.id, payee.username)}
							/>
							<div>{payee.username}</div>
							<Input
								name={`${payee.username}`}
								control={control}
								defaultValue={individualCosts?.[payee.username] || ""}
							/>
						</div>
					))}
			</div>
		</form>
	);
};

export default Bill;
