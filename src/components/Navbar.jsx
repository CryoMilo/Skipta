import Receipt from "../assets/icons/Receipt";
import { ThemeController } from "../common/ThemeController";

const Navbar = () => {
	return (
		<div className="flex justify-end gap-3">
			<ThemeController />
			<Receipt />
		</div>
	);
};

export default Navbar;
