const Input = ({ placeholder, type }) => {
	return (
		<input
			type={type}
			placeholder={placeholder}
			className="input text-center w-full max-w-xs border-b-2 border-b-accent rounded-none"
		/>
	);
};

export default Input;
