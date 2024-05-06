import { useDispatch, useSelector } from "react-redux";
import Input from "../common/Input";
import { useFieldArray, useForm } from "react-hook-form";
import { TrashIcon } from "@heroicons/react/24/outline";
import { deleteBill, updateBill } from "../features/bill/billSlice";
import { generatePayeeFields } from "../utils/generatePayeeFields";
import { useState } from "react";

const BillSegment = ({ billId }) => {
	const profiles = useSelector((state) => state.profile);
	const billData = useSelector((state) => state.bill);

	const currentBill = billData.data.filter((item) => item.id === billId);
	const [isHovered, setIsHovered] = useState(false);

	const bill = currentBill[0];

	const dispatch = useDispatch();

	const payeeList = profiles.data;

	const defaultFields = generatePayeeFields(
		Object.prototype.hasOwnProperty.call(bill, "individualCosts")
			? bill.individualCosts
			: payeeList
	);

	const { control, handleSubmit, reset } = useForm({
		defaultValues: {
			individualCosts: defaultFields,
		},
	});
	const { fields, remove } = useFieldArray({
		control,
		name: "individualCosts",
	});

	// const calculateTotalAmountDue = () => {
	// 	let total = 0;
	// 	for (const payee of bill.individualCosts) {
	// 		total += parseInt(payee.cost);
	// 	}
	// 	setTotalAmountDue(total.toFixed(2));
	// };

	const onSubmit = (data) => {
		dispatch(
			updateBill({
				id: bill.id,
				payer: bill.payer,
				amount: bill.amount,
				place: bill.place,
				individualCosts: parseFloat(data.individualCosts),
			})
		);
	};

	const calculateEvenSplit = () => {
		const totalPayees = fields.length;
		const totalAmount = parseFloat(bill.amount);
		const individualAmount = totalAmount / totalPayees;

		reset({
			individualCosts: fields.map((payee) => ({
				...payee,
				cost: individualAmount.toFixed(2),
			})),
		});
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className={`my-10 max-w-[400px] mx-auto`}>
			<div className="flex justify-between gap-10 border-b-primary border-b-[3px] py-3 mb-5">
				<div
					className="text-lg flex items-center gap-3"
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}>
					{isHovered && (
						<TrashIcon
							onClick={() => dispatch(deleteBill(bill))}
							className="w-5 h-5 mb-[2px] text-red-400 cursor-pointer"
						/>
					)}

					<div>
						{bill.place} - {bill.amount}
					</div>
				</div>
				<div className="flex gap-4 items-center">
					<div
						onClick={() => calculateEvenSplit()}
						type="button"
						className={`bg-secondary cursor-pointer rounded-md p-1`}>
						Divide
					</div>

					<button type="submit">Save</button>
				</div>
			</div>

			<div className="text-center">
				{fields.map((payee, index) => (
					<div
						key={payee.id}
						className="border-none grid grid-cols-[0.1fr_2fr_0.5fr] items-center my-4">
						{bill.payer.username !== payee.username ? (
							<TrashIcon
								className="w-4 h-4 text-red-400 cursor-pointer"
								onClick={() => remove(index)}
							/>
						) : (
							<div></div>
						)}
						<div>{payee.username}</div>
						<Input
							type="number"
							name={`individualCosts.${index}.cost`}
							control={control}
							defaultValue={payee.cost || ""}
						/>
					</div>
				))}
			</div>
		</form>
	);
};

export default BillSegment;
