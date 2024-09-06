import { articles } from "../../data";
import Titlebar from "../Titlebar";
import { LocationOutline } from 'react-ionicons';

const Venue = () => {
	const navigate = (url: string) =>{
		window.open(url);
    }

	return (
		<div
			id="venue"
			className="w-full lg:mt-40 mt-40 flex flex-col items-start justify-center gap-14 lg:px-[310px] px-5 py-20 bg-[#dad5d1] bg-opacity-50 "
		>
			<div className="flex flex-col gap-4">
				<Titlebar title="Venue" />
				<span className="uppercase text-secondary font-oswald font-bold text-[45px]">
					Wedding Ceremony & Reception
				</span>
			</div>
			<div className="flex w-full lg:flex-row flex-col items-center gap-5 justify-between">
				{articles.map((item) => (
					<div key={item.title} className="flex w-full flex-col justify-end p-6 gap-4">
						<span className="text-black font-medium font-oswald text-[32px] tracking-wide leading-[40px] uppercase">
							{item.title}
						</span>
						<p className="font-sans text-lg text-black italic">{item.date}</p>
						<button className="bg-[#b2a397] text-white w-fit mt-5 flex items-center text-center px-10 h-[54px] rounded-full border-primary font-oswald font-medium uppercase tracking-wider" 
						onClick={()=>navigate(item.url)}><LocationOutline color={'#ffffff'} />&nbsp; {item.text}</button>
					</div>
				))}
			</div>
		</div>
	);
};

export default Venue;