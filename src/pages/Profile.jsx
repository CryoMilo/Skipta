import Input from "../common/Input";

const Profile = () => {
	return (
		<section className="w-full my-10">
			<div className="flex flex-col items-center justify-center">
				<div className="avatar my-10 ">
					<div className={`w-36 rounded-full`}>
						<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
					</div>
				</div>
				<Input type="text" placeholder="What's your name?" />
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
				<button className="btn btn-wide bg-secondary flex">Add Yourself</button>
			</div>
		</section>
	);
};

export default Profile;
