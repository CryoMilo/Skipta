import { useDispatch, useSelector } from "react-redux";
import Input from "../common/Input";
import { useFieldArray, useForm } from "react-hook-form";
import { TrashIcon } from "@heroicons/react/24/outline";
import { deleteBill, updateBill } from "../features/bill/billSlice";
import { generatePayeeFields } from "../utils/generatePayeeFields";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const BillSegment = ({ billId }) => {
	const profiles = useSelector((state) => state.profile);
	const billData = useSelector((state) => state.bill);

	const currentBill = billData.data.filter((item) => item.id === billId);
	const [isHovered, setIsHovered] = useState(false);
	const [subTotal, setSubTotal] = useState(0);

	const bill = currentBill[0];

	const dispatch = useDispatch();

	const payeeList = profiles.data;

	const defaultFields = generatePayeeFields(
		Object.prototype.hasOwnProperty.call(bill, "individualCosts")
			? bill.individualCosts
			: payeeList
	);

	const { control, handleSubmit, reset, watch } = useForm({
		defaultValues: {
			individualCosts: defaultFields,
		},
	});

	const costValues = watch().individualCosts.map((item) => item.cost);

	useEffect(() => {
		let totalCost = 0;
		for (const individualCost of watch().individualCosts) {
			totalCost += parseInt(individualCost.cost);
		}
		setSubTotal(totalCost);
	}, [costValues, watch]);

	const { fields, remove } = useFieldArray({
		control,
		name: "individualCosts",
	});

	const onSubmit = (data) => {
		dispatch(
			updateBill({
				id: bill.id,
				payer: bill.payer,
				amount: bill.amount,
				place: bill.place,
				individualCosts: data.individualCosts,
			})
		);
		toast.success("Bill Saved!");
	};

	const calculateEvenSplit = () => {
		const totalPayees = fields.length;
		const totalAmount = bill.amount;
		const individualAmount = totalAmount / totalPayees;

		reset({
			individualCosts: fields.map((payee) => ({
				...payee,
				cost: parseInt(individualAmount),
			})),
		});
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className={`my-10 max-w-[400px] mx-auto px-5`}>
			<div className="flex justify-between gap-10 border-b-primary border-b-[3px] py-3 mb-5">
				<div
					className="text-lg flex items-center gap-3"
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}>
					{isHovered && (
						<TrashIcon
							onClick={() => {
								dispatch(deleteBill(bill));
								toast.error("Bill Deleted!");
							}}
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
						className="btn btn-secondary btn-sm">
						Divide
					</div>

					<button
						className="btn btn-primary py-0 btn-sm"
						disabled={subTotal > bill.amount}
						type="submit">
						Save
					</button>
				</div>
			</div>

			{subTotal > bill.amount && (
				<p className="text-sm text-error">
					Divided value is exceeding the total amount
				</p>
			)}

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
