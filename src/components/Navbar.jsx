import { ChevronLeftIcon } from "@heroicons/react/16/solid";
import { ThemeController } from "../common/ThemeController";
import { useNavigate } from "react-router-dom";
import { ReceiptRefundIcon } from "@heroicons/react/24/outline";

const Navbar = ({ atHome }) => {
	const navigate = useNavigate();

	return (
		<div className={`flex justify-between items-center `}>
			<ChevronLeftIcon
				className={`w-6 h-6 cursor-pointer ${atHome && "invisible"}`}
				onClick={() => navigate("/")}
			/>
			<div className="flex gap-3 items-center">
				<ThemeController />

				<ReceiptRefundIcon
					className="w-6 h-6 cursor-pointer"
					onClick={() => navigate("/vouncher")}
				/>
			</div>
		</div>
	);
};

export default Navbar;
