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
			render={({ formState: { errors }, field: { onChange, onBlur } }) => (
				<div className={`w-full max-w-xs text-center`}>
					<input
						disabled={disabled}
						onChange={onChange}
						onBlur={onBlur}
						type={type}
						defaultValue={defaultValue}
						placeholder={placeholder}
						className={`w-full text-center border-b-2 border-b-secondary rounded-none outline-none p-2 focus:placeholder:invisible bg-transparent ${className}`}
					/>
					{errors && (
						<p className="text-error text-sm pt-2">{errors[name]?.message}</p>
					)}
				</div>
			)}
		/>
	);
};

export default Input;
