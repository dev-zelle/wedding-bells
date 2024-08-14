import { team } from "../../data";
import Titlebar from "../Titlebar";

const Team = () => {
	return (
		<div className="w-full lg:mt-20 lg:mb-10 mt-10 mb-5 justify-center items-center lg:px-[310px] px-5 flex flex-col gap-14">
			<div className="flex flex-col gap-4">
				<Titlebar title="Meet our couple" />
				<span className="uppercase text-secondary font-oswald font-bold text-[45px]">
					Our lovely couple
				</span>
			</div>
			<div className="w-full flex justify-center items-center lg:flex-row flex-col gap-5">
				{team.map((item) => (
					<div
						key={item.name}
						className="flex flex-col gap-4 items-center justify-center"
					>
						<img
							src={item.image}
							alt={item.name}
						/>
						<div className="flex flex-col items-center justify-center gap-1">
							<span className="uppercase text-secondary font-oswald font-medium text-[32px] tracking-wide">
								{item.name}
							</span>
							<span className="font-sans text-lg text-teams">{item.role}</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Team;
