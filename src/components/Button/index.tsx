/* eslint-disable @typescript-eslint/no-explicit-any */
interface Props {
	variant?: "light" | "dark";
	children: any;
	className?: string;
}
const Button = ({ variant = "dark", children, className }: Props) => {
	return (
		<button
			className={`${className} w-fit font-oswald font-medium uppercase tracking-wider bg-[#f6e9d8] text-secondary px-5 lg:px-20 h-[70px] ${
				variant === "light" ? "rounded-l-full" : "rounded-r-full border-l-[6px]"
				/*variant === "light" ? "bg-white text-secondary" : "border-l-[6px] border-primary bg-secondary text-white"*/
			}`}
		>
			{children}
		</button>
	);
};

export default Button;