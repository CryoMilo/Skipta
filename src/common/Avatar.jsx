const Avatar = ({ active, img }) => {
	return (
		<div className="avatar">
			<div
				className={`w-16 rounded-full ${
					active && "ring ring-primary ring-offset-base-100 ring-offset-2"
				}`}>
				<img src={img} />
			</div>
		</div>
	);
};

export default Avatar;
