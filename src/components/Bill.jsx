import { useSelector } from "react-redux";
import Input from "../common/Input";
import { useForm } from "react-hook-form";
import { TrashIcon } from "@heroicons/react/24/outline";

const Bill = ({ bill }) => {
	const profiles = useSelector((state) => state.profile);
	const { control, handleSubmit } = useForm();

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
						disabled
						defaultValue={bill.amount}
						control={control}
					/>
				</div>
				{profiles?.data.map((item) => {
					if (item.id !== bill.payer.id) {
						return (
							<div
								key={item.id}
								className="border-none grid grid-cols-[0.1fr_2fr_0.5fr] items-center my-4">
								<TrashIcon className="w-4 h-4 text-red-400" />
								<div>{item.username}</div>
								<Input
									name={`${item.username}_cost_for_${bill.id}`}
									control={control}
								/>
							</div>
						);
					}
				})}
			</div>
		</form>
	);
};

export default Bill;
