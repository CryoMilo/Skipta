import { Controller } from "react-hook-form";

const Input = ({
	placeholder,
	type,
	defaultValue,
	name,
	control,
	disabled,
	className,
}) => {
	return (
		<Controller
			control={control}
			name={name}
			render={({ field: { onChange, onBlur } }) => (
				<input
					disabled={disabled}
					onChange={onChange}
					onBlur={onBlur}
					type={type}
					defaultValue={defaultValue}
					placeholder={placeholder}
					className={`input text-center w-full max-w-xs border-b-2 border-b-secondary rounded-none ${className}`}
				/>
			)}
		/>
	);
};

export default Input;
