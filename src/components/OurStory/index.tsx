//import Button from "../Button";
import Titlebar from "../Titlebar";

const About = () => {
	return (
		<div className="w-full flex items-center justify-between lg:px-[310px] bg-gray2 lg:h-[514px] lg:p-0 p-10">
			<div className="flex lg:flex-row flex-col items-start justify-between w-full lg:gap-0 gap-10">
				<div className="flex flex-col gap-4">
					<Titlebar title="our story" />
					<span className="uppercase font-oswald font-bold text-[45px] leading-[55px] text-secondary lg:max-w-[450px]">
						A hospital love story
					</span>
				</div>
				<div className="flex flex-col gap-3 lg:max-w-[640px] max-w-full">
					<span className="font-sans font-semibold text-lg text-secondary">
						Kevin Lovely Kevin Lovely Kevin Lovely Kevin Lovely 
					</span>
					<p className="text-gray font-sans text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;