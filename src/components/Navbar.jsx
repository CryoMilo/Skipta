import { ChevronLeftIcon } from "@heroicons/react/16/solid";
import { ThemeController } from "../common/ThemeController";
import { useLocation, useNavigate } from "react-router-dom";
import { ReceiptRefundIcon } from "@heroicons/react/24/outline";
import MainLogo from "../assets/icons/MainLogo";

const Navbar = () => {
	const navigate = useNavigate();
	const { pathname } = useLocation();

	const handleBack = () => {
		if (location.pathname !== "/") {
			navigate(-1);
		} else {
			navigate("/");
		}
	};

	return (
		<div className={`flex justify-between items-center px-4`}>
			<ChevronLeftIcon
				className={`w-6 h-6 cursor-pointer ${pathname === "/" && "hidden"}`}
				onClick={handleBack}
			/>
			<div className="cursor-pointer" onClick={() => navigate("/")}>
				<MainLogo />
			</div>
			<div className="flex gap-3 items-center">
				<ThemeController />

				{pathname !== "/voucher" && (
					<ReceiptRefundIcon
						className="w-6 h-6 cursor-pointer"
						onClick={() => navigate("/voucher")}
					/>
				)}
			</div>
		</div>
	);
};

export default Navbar;
