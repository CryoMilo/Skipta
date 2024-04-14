import { useForm } from "react-hook-form";
import { addProfile } from "../features/profile/profileSlice";
// import Input from "../common/Input";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Profile = () => {
	const { register, handleSubmit } = useForm();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onSubmit = (data) => {
		dispatch(
			addProfile({
				name: data.username,
				img: "https://xsgames.co/randomusers/avatar.php?g=female",
				active: false,
			})
		);
		navigate("/");
	};

	return (
		<form className="w-full my-10" onSubmit={handleSubmit(onSubmit)}>
			<div className="flex flex-col items-center justify-center">
				<div className="avatar my-10 ">
					<div className={`w-36 rounded-full`}>
						<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
					</div>
				</div>
				<input
					type="text"
					placeholder="What's your name?"
					defaultValue="test"
					{...register("username")}
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
		</form>
	);
};

export default Profile;
