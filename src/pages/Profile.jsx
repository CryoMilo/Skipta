import { useForm } from "react-hook-form";
import { addProfile, resetAll } from "../features/profile/profileSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Input from "../common/Input";
import HomeIcon from "../assets/icons/HomeIcon";

const Profile = ({ isNew }) => {
	const { handleSubmit, control } = useForm();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { id } = useParams();

	const profileData = useSelector((state) => state.profile);

	const currentProfileData = isNew
		? []
		: profileData.data.filter((item) => item.id === parseInt(id));

	const onSubmit = (data) => {
		dispatch(
			// resetAll()
			addProfile({
				id: 6,
				username: data.username,
				img: "https://i.pinimg.com/564x/e9/aa/76/e9aa762a356a42366de63647dbb79789.jpg",
				active: false,
			})
		);
		navigate("/");
	};

	return (
		<form className="w-full my-10" onSubmit={handleSubmit(onSubmit)}>
			<div className="flex flex-col items-center justify-center">
				<div onClick={() => navigate("/")}>
					<HomeIcon />
				</div>
				<div className="avatar my-10 ">
					<div className={`w-36 rounded-full`}>
						<img src={currentProfileData[0]?.img} />
					</div>
				</div>
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
					Add Yourself
				</button>
			</div>
			<div className="flex justify-center my-10">
				<div
					onClick={() => dispatch(resetAll())}
					className="btn btn-wide bg-gray-500 flex">
					Reset State
				</div>
			</div>
		</form>
	);
};

export default Profile;
