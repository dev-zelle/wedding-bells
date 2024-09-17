import { HashLink as Link } from "react-router-hash-link";

import bg from "../../assets/images/bg.jpg";
import scroll from "../scroll";
import Timer from "../Timer";

const Header = () => {
    return (
        <div 
			id="home"
            className="w-full flex items-center justify-center relative h-screen bg-cover bg-right"
            style={{backgroundImage: `url(${bg})`}}
            >
			<div className="w-full h-full flex flex-col justify-center items-center bg-black/50">
				<div className="text-[#f6e9d8] flex flex-col items-center justify-center lg:px-0">
					<div className="pt-5 font-semibold font-aerotis lg:text-[45px] text-[45px] lg:leading-[140px] tracking-wide lg:max-w-[50vw] lg:text-left text-center">
						<p className="drop-shadow-2xl">Kevin and Lovely</p>
					</div>
					<div className="text-center pt-3 flex flex-col justify-center items-center font-sans">
						<p className='text-[20px]'>November 28, 2024 Thursday</p>			
					</div>
					<Timer />
					<div className="pt-5">
						<Link to="#rsvp" scroll={scroll} className="px-10 py-4 items-center text-white no-underline bg-[#b2a397] rounded-full hover:bg-[#b2a397] font-oswald font-medium uppercase tracking-wider">
							Click Here for RSVP
						</Link>
					</div>
				</div>
			</div>
        </div>
    );
};

export default Header;