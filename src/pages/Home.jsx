import { useState } from "react";
import Avatar from "../common/Avatar";
import Input from "../common/Input";

const Home = () => {
	const [selectedProfile, setSelectedProfile] = useState(1);
	const [profiles, setProfiles] = useState([
		{
			id: 1,
			img: "https://xsgames.co/randomusers/avatar.php?g=pixel",
			active: true,
		},
		{
			id: 2,
			img: "https://xsgames.co/randomusers/avatar.php?g=pixel",
			active: false,
		},
		{
			id: 3,
			img: "https://xsgames.co/randomusers/avatar.php?g=pixel",
			active: false,
		},
		{
			id: 4,
			img: "https://xsgames.co/randomusers/avatar.php?g=pixel",
			active: false,
		},
	]);

	const updateSelectedProfile = (id) => {
		setSelectedProfile(id);
		setProfiles((prevProfiles) => {
			return prevProfiles.map((profile) => {
				if (profile.id === id) {
					return { ...profile, active: !profile.active }; // Toggle the active status
				} else {
					return { ...profile, active: false }; // Set others to false
				}
			});
		});
	};

	return (
		<section className="my-10">
			<div className="my-10">
				<div className="flex w-full items-center flex-col gap-10">
					<Input type="text" placeholder="Where did you pay?" />
					<Input type="number" placeholder="Amount" />
				</div>
			</div>
			<p className="text-center w-full">Who are you?</p>
			<div className="grid grid-cols-3 place-items-center max-w-[400px] mx-auto my-10 text-center gap-6">
				{profiles.map(({ id, img, active }) => (
					<div key={id} onClick={() => updateSelectedProfile(id)}>
						<Avatar active={active} img={img} />
					</div>
				))}
			</div>
			<div className="flex gap-2 my-10 w-full max-w-[400px] mx-auto">
				<a href={`/profile/edit/${selectedProfile}`} className="w-1/2">
					<button className="btn bg-primary w-full">Edit</button>
				</a>
				<a href="/profile/new" className="w-1/2">
					<button className="btn bg-secondary w-full">Add Yourself</button>
				</a>
			</div>
		</section>
	);
};

export default Home;
