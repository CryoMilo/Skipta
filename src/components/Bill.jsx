import { useSelector } from "react-redux";
import Input from "../common/Input";
import { useForm } from "react-hook-form";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const Bill = ({ bill }) => {
	const profiles = useSelector((state) => state.profile);

	const payerRemovedList = profiles.data.filter(
		(item) => item.id !== bill.payer.id
	);

	const [payeeList, setPayeelist] = useState(payerRemovedList);

	const { control, handleSubmit } = useForm();

	const removePayeeList = (idToRemove) => {
		const newList = payeeList?.filter((item) => item.id !== idToRemove);
		setPayeelist(newList);
	};

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="my-10 max-w-[400px] mx-auto">
			<div className="flex justify-between gap-10 border-b-primary border-b-[3px] py-3 my-5">
				<div className="text-lg w-24 overflow-hidden whitespace-nowrap">
					{bill.place} - {bill.amount}
				</div>
				<div>
					<button
						type="submit"
						className="bg-secondary cursor-pointer rounded-md p-1">
						Divide
					</button>
				</div>
			</div>
			<div className="text-center">
				<div className="border-none grid grid-cols-[0.1fr_2fr_0.5fr] items-center my-4">
					<div></div>
					<div>{bill.payer.username}</div>
					<Input
						name={`${bill.payer.username}_cost_for_${bill.id}`}
						defaultValue={bill.amount}
						control={control}
					/>
				</div>
				{payeeList.map((payee) => (
					<div
						key={payee.id}
						className="border-none grid grid-cols-[0.1fr_2fr_0.5fr] items-center my-4">
						<div
							onClick={() => removePayeeList(payee.id)}
							className="cursor-pointer">
							<TrashIcon className="w-4 h-4 text-red-400" />
						</div>
						<div>{payee.username}</div>
						<Input
							name={`${payee.username}_cost_for_${bill.id}`}
							control={control}
						/>
					</div>
				))}
			</div>
		</form>
	);
};

export default Bill;
