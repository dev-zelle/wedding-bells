interface Props {
	variant?: "light" | "dark";
	children: any;
	className?: string;
}
const Button = ({ variant = "dark", children, className }: Props) => {
	return (
		<button
			className={`${className} w-fit px-10 h-[70px] rounded-full border-primary font-oswald font-medium uppercase tracking-wider ${
				variant === "light" ? "bg-[#b2a397] text-white" : "bg-secondary text-white"
			}`}
		>
			{children}
		</button>
	);
};

export default Button;
