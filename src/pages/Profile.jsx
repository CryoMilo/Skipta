import { useForm } from "react-hook-form";
import {
	addProfile,
	deleteProfile,
	updateProfile,
} from "../features/profile/profileSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../common/Input";
import ImageUpload from "../components/ImageUpload";
import { useState } from "react";
import dummyProfile from "../assets/images/dummyProfile.jpg";
import Navbar from "../components/Navbar";
import { yupResolver } from "@hookform/resolvers/yup";
import { profileRegisterSchema } from "../utils/validationSchemas";
import QRUpload from "../components/QRUpload";
import Loader from "../common/Loader";

const Profile = ({ isNew }) => {
	const [newUploadedImg, setNewUploadedImg] = useState();
	const [newUploadedQR, setNewUploadedQR] = useState();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { id } = useParams();

	const profileData = useSelector((state) => state.profile);

	const currentProfileData = isNew
		? []
		: profileData.data.filter((item) => item.id === id);

	const { handleSubmit, control } = useForm({
		defaultValues: {
			username: currentProfileData[0]?.username,
			bankAccountName: currentProfileData[0]?.bankAccountName,
			bankName: currentProfileData[0]?.bankName,
			bankAccountNumber: currentProfileData[0]?.bankAccountNumber,
			bankQRCode: currentProfileData[0]?.bankQRCode,
		},
		resolver: yupResolver(profileRegisterSchema),
	});

	const onSubmit = (data) => {
		if (isNew) {
			dispatch(
				addProfile({
					id: crypto.randomUUID(),
					username: data.username,
					img: newUploadedImg || dummyProfile,
					active: false,
					bankAccountName: data.bankAccountName,
					bankName: data.bankName,
					bankAccountNumber: data.bankAccountNumber,
					bankQRCode: newUploadedQR,
				})
			);
		} else
			dispatch(
				updateProfile({
					id: currentProfileData[0].id,
					username: data.username,
					img: newUploadedImg ? newUploadedImg : currentProfileData[0].img,
					active: false,
					bankAccountName: data.bankAccountName,
					bankName: data.bankName,
					bankAccountNumber: data.bankAccountNumber,
					bankQRCode: currentProfileData[0].bankQRCode || newUploadedQR,
				})
			);
		navigate("/");
	};

	const onDelete = () => {
		navigate("/");
		dispatch(
			deleteProfile({
				id: currentProfileData[0].id,
			})
		);
	};

	return (
		<>
			<Navbar />
			{currentProfileData.length !== 0 || isNew ? (
				<form className="w-full my-10" onSubmit={handleSubmit(onSubmit)}>
					<div className="flex flex-col items-center justify-center">
						<ImageUpload
							isNew={isNew}
							currentProfileImg={currentProfileData[0]?.img}
							setNewUploadedImg={setNewUploadedImg}
						/>
						<Input
							control={control}
							name="username"
							type="text"
							placeholder="What's your name?"
							defaultValue={currentProfileData[0]?.username}
						/>
					</div>

					<div className="my-20 flex flex-col gap-10 items-center">
						<p className="text-center text-md my-5">BANK DETAILS</p>
						<Input
							control={control}
							name="bankAccountName"
							type="text"
							placeholder="Bank Account Name"
							defaultValue={currentProfileData[0]?.bankAccountName}
						/>
						<Input
							control={control}
							name="bankAccountNumber"
							type="number"
							placeholder="Bank Account Number"
							defaultValue={currentProfileData[0]?.bankAccountNumber}
						/>
						<Input
							control={control}
							name="bankName"
							type="text"
							placeholder="Bank Name"
							defaultValue={currentProfileData[0]?.bankName}
						/>

						<div>Upload Your QR Code</div>
						<QRUpload
							isNew={isNew}
							currentQR={currentProfileData[0]?.bankQRCode}
							setNewUploadedQR={setNewUploadedQR}
						/>
					</div>

					<div className="flex justify-center my-5">
						<button type="submit" className="btn btn-wide bg-secondary flex">
							{isNew ? "Add Yourself" : "Confirm"}
						</button>
					</div>

					{!isNew && (
						<div className="flex justify-center">
							<button
								onClick={onDelete}
								type="button"
								className="btn btn-wide bg-error flex">
								Delete
							</button>
						</div>
					)}
				</form>
			) : (
				<Loader />
			)}
		</>
	);
};

export default Profile;
