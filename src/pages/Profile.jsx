import { useForm } from "react-hook-form";
import {
	addProfile,
	resetAll,
	updateProfile,
} from "../features/profile/profileSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../common/Input";
import HomeIcon from "../assets/icons/HomeIcon";
import ImageUpload from "../components/ImageUpload";
import { useState } from "react";
import dummyProfile from "../assets/images/dummyProfile.jpg";
import { resetBill } from "../features/bill/billSlice";
import Navbar from "../components/Navbar";

const Profile = ({ isNew }) => {
	const { handleSubmit, control } = useForm();
	const [newUploadedImg, setNewUploadedImg] = useState();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { id } = useParams();

	const profileData = useSelector((state) => state.profile);

	const currentProfileData = isNew
		? []
		: profileData.data.filter((item) => item.id === id);

	const onSubmit = (data) => {
		if (isNew) {
			dispatch(
				addProfile({
					id: crypto.randomUUID(),
					username: data.username,
					img: newUploadedImg || dummyProfile,
					active: false,
				})
			);
		} else
			dispatch(
				updateProfile({
					id: currentProfileData[0].id,
					username: data.username,
					img: newUploadedImg ? newUploadedImg : currentProfileData[0].img,
					active: false,
				})
			);
		navigate("/");
	};

	return (
		<>
			<Navbar />
			<form className="w-full my-10" onSubmit={handleSubmit(onSubmit)}>
				<div className="flex flex-col items-center justify-center">
					<div className="cursor-pointer" onClick={() => navigate("/")}>
						<HomeIcon />
					</div>
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

				<div className="my-10 max-w-[400px] mx-auto">
					<table className="table w-full my-10">
						<thead className="text-center">
							<tr className="border-none">
								<th>Place</th>
								<th>Amount</th>
							</tr>
						</thead>
						<tbody className="text-center">
							<tr className="border-none">
								<th>Cy Ganderton</th>
								<td>499</td>
							</tr>
							<tr className="border-none">
								<th>Hart Hagerty</th>
								<td>289</td>
							</tr>
						</tbody>
					</table>
				</div>

				<div className="flex justify-center my-10">
					<button type="submit" className="btn btn-wide bg-secondary flex">
						{isNew ? "Add Yourself" : "Confirm"}
					</button>
				</div>
				<div className="flex justify-center my-10">
					<div
						onClick={() => {
							dispatch(resetAll());
							dispatch(resetBill());
						}}
						className="btn btn-wide bg-gray-500 flex">
						Reset State
					</div>
				</div>
			</form>
		</>
	);
};

export default Profile;
