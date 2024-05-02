import { useForm } from "react-hook-form";
import Input from "../common/Input";
import { HtaminnThope, MontPhatThope } from "../constants/marketConstants";
import { addQueue } from "../features/queue/queueSlice";
import { useDispatch } from "react-redux";
import OrderNavbar from "../components/OrderNavbar";

import img1 from "../../src/assets/images/img1.png";
import img2 from "../../src/assets/images/img2.png";
import paymentQR from "../../src/assets/images/paymentQR.jpg";

const Order = () => {
	return (
		<div className="px-10 py-10">
			<OrderNavbar />

			<div className="flex flex-row items-center justify-around my-10">
				<MokePhatThope />
				<HtaMinThope />
			</div>
		</div>
	);
};

export default Order;

const MokePhatThope = () => {
	const { control, register, watch } = useForm();

	const dispatch = useDispatch();

	const isSelectedSoup = watch("soup");

	const addMontPhatThope = () => {
		dispatch(
			addQueue({
				id: crypto.randomUUID(),
				menuName: MontPhatThope,
				orderCompleted: false,
				...watch(),
			})
		);
	};

	return (
		<div>
			{/* Open the modal using document.getElementById('ID').showModal() method */}
			<button onClick={() => document.getElementById("my_modal_1").showModal()}>
				<img className="p-20" src={img1} alt="1" />
			</button>

			{/* This is "Moke Phat Thope" dialog */}
			<dialog id="my_modal_1" className="modal">
				<div className="modal-box">
					<p className="w-full my-4 text-center font-bold text-xl">
						{MontPhatThope}
					</p>

					{/* Main Dish spice lvl*/}
					<div>
						<label>
							<div className="flex space-x-3 mb-3">
								<input
									type="radio"
									value={0}
									{...register("mainDishSpiceLvl")}
								/>
								<span>No Spicy</span>
							</div>
						</label>

						<label>
							<div className="flex space-x-3 mb-3">
								<input
									type="radio"
									value={1}
									{...register("mainDishSpiceLvl")}
								/>
								<span>Level 1</span>
							</div>
						</label>

						<label>
							<div className="flex space-x-3 mb-3">
								<input
									type="radio"
									value={2}
									{...register("mainDishSpiceLvl")}
								/>
								<span>Level 2</span>
							</div>
						</label>
					</div>
					{/* checkbox */}
					<div className="form-control">
						<label className="cursor-pointer label">
							<span className="label-text">Cilantro</span>
							<input type="checkbox" {...register("cilantro")} />
						</label>
					</div>
					<div className="form-control">
						<label className="cursor-pointer label">
							<span className="label-text">Soup</span>
							<input type="checkbox" {...register("soup")} />
						</label>
					</div>

					{/* soup spice lvl */}
					<div className={`${isSelectedSoup ? "block" : "hidden"}`}>
						<label>
							<div className="flex space-x-3 mb-3">
								<input type="radio" value={0} {...register("soupSpiceLvl")} />
								<span>No Spicy</span>
							</div>
						</label>

						<label>
							<div className="flex space-x-3 mb-3">
								<input type="radio" value={1} {...register("soupSpiceLvl")} />
								<span>Level 1</span>
							</div>
						</label>

						<label>
							<div className="flex space-x-3 mb-3">
								<input type="radio" value={2} {...register("soupSpiceLvl")} />
								<span>Level 2</span>
							</div>
						</label>
					</div>

					<div className="w-full pl-10 my-5">
						<label>Name</label>
						<Input name="buyerName" control={control} />
					</div>

					<div className="mt-10">
						<h3 className="text-center">Pay Here</h3>
						<img className="p-8" src={paymentQR} alt="payment" />
					</div>

					<div className="modal-action">
						<form method="dialog">
							<button className="btn">Close</button>
						</form>
						<form method="dialog">
							<button
								className="btn btn-primary"
								onClick={() => addMontPhatThope()}>
								Add Order
							</button>
						</form>
					</div>
				</div>
			</dialog>
		</div>
	);
};

const HtaMinThope = () => {
	const { control, register, watch } = useForm();

	const dispatch = useDispatch();

	const isSelectedSoup = watch("soup");

	const addHtaminnThope = () => {
		dispatch(
			addQueue({
				menuName: HtaminnThope,
				id: crypto.randomUUID(),
				orderCompleted: false,
				...watch(),
			})
		);
	};
	return (
		<div>
			{/* Open the modal using document.getElementById('ID').showModal() method */}
			<button onClick={() => document.getElementById("my_modal_2").showModal()}>
				<img className="p-20" src={img2} alt="2" />
			</button>

			{/* This is "Hta Min Thope" dialog */}
			<dialog id="my_modal_2" className="modal">
				<div className="modal-box">
					<p className="w-full my-4 text-center font-bold text-xl">
						{HtaminnThope}
					</p>

					{/* checkboxes */}
					<div>
						<div className="form-control">
							<label className="cursor-pointer label">
								<span className="label-text">Meat Ball</span>
								<input type="checkbox" {...register("meatball")} />
							</label>
						</div>
						<div className="form-control">
							<label className="cursor-pointer label">
								<span className="label-text">Soup</span>
								<input type="checkbox" {...register("soup")} />
							</label>
						</div>
					</div>

					{/* soup spice lvl */}
					<div className={`${isSelectedSoup ? "block" : "hidden"}`}>
						<label>
							<div className="flex space-x-3 mb-3">
								<input type="radio" value={0} {...register("soupSpiceLvl")} />
								<span>No Spicy</span>
							</div>
						</label>

						<label>
							<div className="flex space-x-3 mb-3">
								<input type="radio" value={1} {...register("soupSpiceLvl")} />
								<span>Level 1</span>
							</div>
						</label>

						<label>
							<div className="flex space-x-3 mb-3">
								<input type="radio" value={2} {...register("soupSpiceLvl")} />
								<span>Level 2</span>
							</div>
						</label>
					</div>

					<div className="w-full pl-10 my-5">
						<label>Name</label>
						<Input name="buyerName" control={control} />
					</div>

					<div className="mt-10">
						<h3 className="text-center">Pay Here</h3>
						<img className="p-8" src={paymentQR} alt="payment" />
					</div>

					<div className="modal-action">
						<form method="dialog">
							<button className="btn">Close</button>
						</form>
						<form method="dialog">
							<button
								className="btn btn-primary"
								onClick={() => addHtaminnThope()}>
								Add Order
							</button>
						</form>
					</div>
				</div>
			</dialog>
		</div>
	);
};
