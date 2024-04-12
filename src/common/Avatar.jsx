const Avatar = ({ active }) => {
	return (
		<div className="avatar">
			<div
				className={`w-16 rounded-full ${
					active && "ring ring-primary ring-offset-base-100 ring-offset-2"
				}`}>
				<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
			</div>
		</div>
	);
};

export default Avatar;
