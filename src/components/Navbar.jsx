import ReceiptIcon from "../assets/icons/ReceiptIcon";
import { ThemeController } from "../common/ThemeController";

const Navbar = () => {
	return (
		<>
			{/* <div className="flex justify-between items-center">
				<Logo />
				<div className="flex gap-3">
					<ThemeController />
					<ReceiptIcon />
				</div>
			</div> */}

			<div className="flex justify-end gap-3">
				<ThemeController />
				<ReceiptIcon />
			</div>
		</>
	);
};

export default Navbar;
