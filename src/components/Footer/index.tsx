//import logo from "../../assets/images/logoBlack.svg";
import {
	LogoBehance,
	LogoFacebook,
	LogoInstagram,
	LogoLinkedin,
	LogoTwitter,
} from "react-ionicons";

const Footer = () => {
	return (
		<div className="w-full lg:mt-40 mt-20 flex flex-col">
			<div className="w-full flex lg:flex-row flex-col items-center justify-between border-t lg:h-[80px] lg:gap-0 gap-10 lg:py-0 py-5 border-[#DADADA] lg:px-[310px] px-5">
				<span className="font-sans text-gray lg:text-left text-center">
					Gifted by:{" "}
					<a
						//href="https://www.facebook.com/profile.php?id=100081522352549"
						target="_blank"
						className="text-secondary"
					>
						Cousins!
					</a>
				</span>
                <p>Congrats Kevin and Lovely!</p>
				<div className="flex items-center gap-6">
					<LogoFacebook cssClasses={"!text-secondary !fill-secondary cursor-pointer"} />
                    ©2024 Kevin & Lovely
				</div>
			</div>
		</div>
	);
};

export default Footer;
