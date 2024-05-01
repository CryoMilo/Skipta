import { useDispatch, useSelector } from "react-redux";
import QueueNavbar from "../components/QueueNavbar";
import { resetAll } from "../features/queue/queueSlice";

const Queue = () => {
	const queueData = useSelector((state) => state.queue);
	const dispatch = useDispatch();

	const orders = queueData?.data;

	console.log(orders);

	return (
		<div className="px-10 py-10">
			<QueueNavbar atHome />

			{orders.map((item) => {
				return (
					!item.orderCompleted && (
						<div
							key={item.id}
							tabIndex={item.id}
							className="collapse collapse-arrow border bg-secondary my-10">
							<div className="collapse-title text-xl font-medium">
								{item.buyerName} - {item.menuName}
							</div>

							<div className="collapse-content">
								<p></p>
							</div>
						</div>
					)
				);
			})}

			<div className="flex justify-center my-10">
				<div
					onClick={() => dispatch(resetAll())}
					className="btn btn-wide bg-gray-500 flex">
					Reset State
				</div>
			</div>
		</div>
	);
};

export default Queue;
