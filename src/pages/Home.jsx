import Input from "../common/Input";

const Home = () => {
	return (
		<div>
			<section className="my-10">
				<div className="flex w-full items-center flex-col gap-10">
					<Input type="text" placeholder="Where did you pay?" />
					<Input type="number" placeholder="Amount" />
				</div>
			</section>
			<p className="text-center w-full">Who are you?</p>
			<div className="grid grid-cols-3 place-items-center max-w-[400px] mx-auto my-10 text-center gap-6">
				<div className="avatar">
					<div className="w-16 rounded-full">
						<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
					</div>
				</div>

				<div className="avatar">
					<div className="w-16 rounded-full">
						<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
					</div>
				</div>

				<div className="avatar">
					<div className="w-16 rounded-full">
						<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
					</div>
				</div>

				<div className="avatar">
					<div className="w-16 rounded-full">
						<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
					</div>
				</div>

				<div className="avatar">
					<div className="w-16 rounded-full">
						<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
					</div>
				</div>
			</div>
			<div className="flex justify-center my-28">
				<button className="btn btn-wide bg-secondary flex">Add Person</button>
			</div>
		</div>
	);
};

export default Home;
