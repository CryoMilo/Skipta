const Bill = ({ bill }) => {
	return (
		<div className="my-10 max-w-[400px] mx-auto">
			<table className="table w-full my-10">
				<thead className="text-center">
					<tr className="border-b-primary border-b-[3px]">
						<th className="text-lg">
							{bill.place} - {bill.amount}
						</th>
						<th>
							<button className="bg-secondary cursor-pointer rounded-md p-1">
								Divide
							</button>
						</th>
					</tr>
				</thead>
				<tbody className="text-center">
					<tr className="border-none">
						<th>{bill.payer.username}</th>
						<td>{bill.amount}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default Bill;
