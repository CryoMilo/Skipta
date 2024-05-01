import { useDispatch, useSelector } from "react-redux";
import QueueNavbar from "../components/QueueNavbar";
import { deleteQueue, updateQueue } from "../features/queue/queueSlice";
import { HtaminnThope, MontPhatThope } from "../constants/marketConstants";

const Queue = () => {
	const queueData = useSelector((state) => state.queue);
	const dispatch = useDispatch();

	const orders = queueData?.data;

	const setCompleted = (id) => {
		dispatch(
			updateQueue({
				id: id,
				orderCompleted: true,
			})
		);
	};

	return (
		<div className="px-10 py-10">
			<QueueNavbar atHome />

			{orders.map((item) => {
				return (
					<div
						key={item.id}
						className="card lg:card-side bg-base-100 shadow-xl my-4">
						<div className="card-body">
							<h2 className="card-title flex justify-between">
								<div>{item.menuName}</div>
								<div>{item.buyerName}</div>
							</h2>
							<table className="table w-full my-10">
								<tbody className="text-center">
									{item.menuName === MontPhatThope && (
										<tr className="border-none">
											<th>Spice Level</th>
											<td>
												<input
													type="range"
													min={0}
													max="2"
													disabled
													value={String(item.mainDishSpiceLvl)}
													className="range range-primary"
												/>
											</td>
										</tr>
									)}
									<tr className="border-none">
										<th>Soup</th>
										<td>{item.soup === true ? "Yes" : "No"}</td>
									</tr>
									{item.soup === true && (
										<tr className="border-none">
											<th>Soup Spice Level</th>
											<td>
												<input
													type="range"
													min={0}
													max="2"
													disabled
													value={String(item.soupSpiceLvl)}
													className="range range-primary"
												/>
											</td>
										</tr>
									)}
									{item.menuName === HtaminnThope && (
										<tr className="border-none">
											<th>Meetballs</th>
											<td>{item.meatball === true ? "Yes" : "No"}</td>
										</tr>
									)}
									{item.menuName === MontPhatThope && (
										<tr className="border-none">
											<th>Cilantro</th>
											<td>{item.cilantro === true ? "Yes" : "No"}</td>
										</tr>
									)}
								</tbody>
							</table>
							<div className="card-actions justify-between">
								<button
									onClick={() => dispatch(deleteQueue(item))}
									className="btn btn-error">
									Delete
								</button>
								{item.orderCompleted ? (
									<button disabled className="btn btn-primary disabled">
										Completed
									</button>
								) : (
									<button
										onClick={() => setCompleted(item.id)}
										className="btn btn-primary">
										Done!
									</button>
								)}
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Queue;
