import bg from "../../assets/images/bg.jpg";
import Button from "../Button";

//import Button from "../Button";
import Timer from "../Timer";

const Header = () => {
    return (
        <div 
            className="w-full flex items-center justify-center relative h-screen bg-cover bg-center"
            style={{backgroundImage: `url(${bg})`}}
            >
			<div className="w-full h-full flex flex-col justify-center items-center bg-black/50">
				<div className="text-[#f6e9d8] flex flex-col items-center justify-center lg:px-0 px-12">
					<div className="font-semibold font-aerotis lg:text-[110px] text-[45px] lg:leading-[140px] tracking-wide lg:max-w-[50vw] lg:text-left text-center">
						<p className="drop-shadow-2xl">Kevin and Lovely</p>
					</div>
					<div className="text-center pt-10 flex flex-col justify-center items-center font-sans">
						<p className='text-[20px]'>November 28, 2024 Thursday</p>						
						{/*<p className="pt-5">"Together is a wonderful place to be."</p>*/}
					</div>

					<Timer />
					<Button variant="light" className="font-sans">Click Here for RSVP</Button>
					{/*<div className="">						
						<Button className="text-[10px] lg:text-[15px]" variant="light">NOVEMBER 28 2024<br />THURSDAY</Button>
						<Button className="text-[10px] lg:text-[15px]" variant="dark">SAN PABLO CHURCH<br />JUNA SUBDIVISION</Button>
					</div>*/}
				</div>
			</div>
        </div>
    );
};

export default Header;