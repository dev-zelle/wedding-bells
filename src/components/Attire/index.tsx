import { attire } from "../../data";

const Attire = () => {
	return (
		<div className="w-full justify-center items-center lg:px-[310px] px-5 flex flex-col gap-14">
			<div className="w-full flex justify-center items-center lg:flex-row flex-col gap-5">
				{attire.map((item) => (
					<div
						key={item.image}
						className="flex flex-col gap-4 items-center justify-center"
					>
						<img
							src={item.image}
							alt={item.image}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default Attire;
