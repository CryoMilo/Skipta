import { ChevronLeftIcon } from "@heroicons/react/16/solid";
import { ThemeController } from "../common/ThemeController";
import { useNavigate } from "react-router-dom";
import { ReceiptRefundIcon } from "@heroicons/react/24/outline";
import MainLogo from "../assets/icons/MainLogo";

const Navbar = ({ atHome }) => {
	const navigate = useNavigate();

	return (
		<div className={`flex justify-between items-center`}>
			<ChevronLeftIcon
				className={`w-6 h-6 cursor-pointer ${atHome && "hidden"}`}
				onClick={() => navigate("/")}
			/>
			<div className="pl-5">
				<MainLogo />
			</div>
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
