import Navbar from "../components/Navbar";

const Layout = ({ childern }) => {
	return (
		<>
			<Navbar />
			{childern}
		</>
	);
};

export default Layout;
