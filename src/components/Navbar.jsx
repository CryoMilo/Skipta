import ReceiptIcon from "../assets/icons/ReceiptIcon";
import { ThemeController } from "../common/ThemeController";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
	const navigate = useNavigate();

	return (
		<>
			<div className="flex justify-end gap-3">
				<ThemeController />
				<div className="cursor-pointer" onClick={() => navigate("/vouncher")}>
					<ReceiptIcon />
				</div>
			</div>
		</>
	);
};

export default Navbar;
