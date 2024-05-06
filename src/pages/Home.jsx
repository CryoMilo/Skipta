import { useState, useEffect } from "react";
import Avatar from "../common/Avatar";
import Input from "../common/Input";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { addBill, resetVouncher } from "../features/bill/billSlice";
import Navbar from "../components/Navbar";
import { resetAll } from "../features/profile/profileSlice";

const Home = () => {
	const dispatch = useDispatch();

	const { control, handleSubmit } = useForm();

	const profileData = useSelector((state) => state.profile);

	const [profiles, setProfiles] = useState(profileData.data);

	const [selectedProfile, setSelectedProfile] = useState();

	useEffect(() => {
		setProfiles(profileData.data);
	}, [profileData]);

	const updateSelectedProfile = (currentProfile) => {
		setProfiles((prevProfiles) => {
			return prevProfiles.map((profile) => {
				if (profile.id === currentProfile.id) {
					return { ...profile, active: !profile.active }; // Toggle the active status
				} else {
					return { ...profile, active: false }; // Set others to false
				}
			});
		});
		setSelectedProfile(currentProfile);
	};

	const onSubmit = (data) => {
		dispatch(
			addBill({ id: crypto.randomUUID(), payer: selectedProfile, ...data })
		);
	};

	return (
		<>
			<Navbar atHome />
			<form onSubmit={handleSubmit(onSubmit)} className="my-10">
				<div className="my-10">
					<div className="flex w-full items-center flex-col gap-10">
						<Input
							name="place"
							type="text"
							placeholder="Where did you pay?"
							control={control}
						/>
						<Input
							name="amount"
							type="number"
							placeholder="Amount"
							control={control}
						/>
					</div>
				</div>
				<p className="text-center w-full">Who are you?</p>
				<div className="grid grid-cols-3 place-items-center max-w-[400px] mx-auto my-10 text-center gap-6">
					{profiles.map((profile) => (
						<div
							key={profile.id}
							onClick={() => updateSelectedProfile(profile)}>
							<Avatar active={profile.active} img={profile.img} />
						</div>
					))}
					<a href="/profile/new" className="avatar placeholder cursor-pointer">
						<div className="bg-gray-500 text-neutral-content rounded-full w-16">
							<span className="text-4xl">+</span>
						</div>
					</a>
				</div>
				<div className="flex gap-2 my-10 w-full max-w-[400px] mx-auto">
					<button
						disabled={profiles.every((element) => element.active === false)}
						type="button"
						className="btn bg-primary w-1/2">
						<a href={`/profile/edit/${selectedProfile?.id}`}>Edit</a>
					</button>

					<div className="w-1/2">
						<button type="submit" className="btn bg-secondary w-full">
							Paid
						</button>
					</div>
				</div>
				<div className="flex justify-center my-10">
					<div
						onClick={() => dispatch(resetAll())}
						className="btn btn-wide bg-gray-500 flex">
						Reset State
					</div>
				</div>
				<div className="flex justify-center my-10">
					<div
						onClick={() => dispatch(resetVouncher())}
						className="btn btn-wide bg-gray-500 flex">
						Reset Vouncher
					</div>
				</div>
			</form>
		</>
	);
};

export default Home;
