import Avatar from "../common/Avatar";
import Input from "../common/Input";

const Home = () => {
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
				<Avatar />
				<Avatar active />
				<Avatar />
				<Avatar />
				<Avatar />
			</div>
			<div className="flex justify-center my-10">
				<button className="btn btn-wide bg-secondary flex">Add Yourself</button>
			</div>
		</section>
	);
};

export default Home;
