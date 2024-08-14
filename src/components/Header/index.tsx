import bg from "../../assets/images/bg.jpg";

import { navItems } from "../../data";
import Button from "../Button";

const Header = () => {
    return (
        <div 
            className="w-full flex items-center justify-center relative h-screen bg-cover bg-center"
            style={{backgroundImage: `url(${bg})`}}
            >
			<div className="w-full h-full flex flex-col justify-center items-center backdrop-blur-sm">
				<div className="absolute top-9 px-12 w-full flex items-center justify-between">
					<div></div>
					{/*<img src={logo} alt="logo" />*/}
					<div className="hidden lg:flex items-center gap-10">
						{navItems.map((item) => (
							<a
								href={item.path}
								key={item.title}
								target="_blank"
								className={`font-hasweny text-lg uppercase font-medium border-b pb-2 tracking-widest ${
									item.active
										? "border-orange-300 text-orange-300"
										: "border-transparent text-orange-500"
								}`}
							>
								{item.title}
							</a>
						))}
					</div>
					<div className="hidden lg:flex items-center gap-6">
					</div>
				</div>
				<div className="flex flex-col gap-12 items-center justify-center lg:px-0 px-12">
					<div className="text-white font-semibold font-aerotis lg:text-[110px] text-[45px] lg:leading-[140px] tracking-wide lg:max-w-[50vw] lg:text-left text-center">
						Kevin and Lovely
					</div>
					<div>						
						<Button className="text-[10px]" variant="light">NOVEMBER 28 2024<br />THURSDAY</Button>
						<Button className="text-[10px]" variant="dark">SAN PABLO CHURCH<br />JUNA SUBDIVISION</Button>
					</div>
				</div>
			</div>
        </div>
    );
};

export default Header;