import { ChevronLeftIcon } from "@heroicons/react/16/solid";
import { ThemeController } from "../common/ThemeController";
import { useNavigate } from "react-router-dom";
import MainLogo from "../assets/icons/MainLogo";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";

const OrderNavbar = ({ atHome }) => {
	const navigate = useNavigate();

	return (
		<div className={`flex justify-between items-center px-4`}>
			<ChevronLeftIcon
				className={`w-6 h-6 cursor-pointer ${atHome && "hidden"}`}
				onClick={() => navigate("/")}
			/>

			<MainLogo />

			<div className="flex gap-3 items-center">
				<ArrowLeftCircleIcon />

				<ThemeController />
			</div>
		</div>
	);
};

export default OrderNavbar;
