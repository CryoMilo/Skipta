import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ReceiverBankQRCode = ({ receiver }) => {
	const profiles = useSelector((state) => state.profile);
	const [receiverProfile, setReceiverProfile] = useState();

	useEffect(() => {
		setReceiverProfile(
			profiles.data?.filter((item) => item.username === receiver)
		);
	}, []);

	return (
		<div>
			<img
				className="rounded-lg"
				src={receiverProfile[0]?.bankQRCode}
				alt="Payment QR"
			/>
		</div>
	);
};

export default ReceiverBankQRCode;
