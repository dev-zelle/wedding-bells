import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import { navItems } from "../../data";
import { HashLink as Link } from "react-router-hash-link";
import { useEffect, useState } from "react";
import scroll from "../scroll";

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const sections = navItems.map(i => i.path.replace('#', ''));
    const [activeSection, setActiveSection] = useState<string>('');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

    /*const scrollWithOffset = (el: HTMLElement) => {
        const yOffset = -60;
        const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    };*/

    /**
     * Observes which section is in view to set as active path
     */
    useEffect(() => {
        const handleIntersection: IntersectionObserverCallback = (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                setActiveSection(`#${id}`);
                if (location.hash !== `#${id}`) {
                navigate(`#${id}`, { replace: true }); // Update URL without reloading the page
                }
            }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, {
            rootMargin: '-50px 0px -50px 0px', // area in view
            threshold: 0.5, // 50% of the element must be visible to trigger
        });

        sections.forEach((sectionId) => {
            const section = document.getElementById(sectionId);
            if (section) {
            observer.observe(section);
            }
        });

        return () => {
            sections.forEach((sectionId) => {
            const section = document.getElementById(sectionId);
            if (section) {
                observer.unobserve(section);
            }
            });
        };
    }, [sections, navigate, location.hash]);

	return (
		<div className="w-full flex bg-gray2 h-[60px] fixed top-0 left-0 right-0 shadow-md z-50">
			<div className="absolute top-3 px-6 w-full flex items-center justify-center gap-10">				
				<div className="flex items-center justify-between w-full lg:w-auto">
					<img className="h-10 w-30" src={logo} alt="logo" />

					{/* Hamburger Icon */}
					<button
						className="lg:hidden block focus:outline-none"
						onClick={toggleMenu}
					>
						<svg
							className="w-8 h-8 text-[#b2a397]"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16m-7 6h7"
							></path>
						</svg>
					</button>
				</div>

				{/* Desktop Links */}
				<div className="hidden lg:flex items-center gap-10">
					{navItems.map((item) => (
						<nav key={item.id}>
							<Link
								to={item.path}
								scroll={scroll}
								className={`font-hasweny text-lg uppercase font-medium border-b pb-2 tracking-widest ${
									activeSection === item.path
										? "border-[#b2a397] text-[#b2a397]"
										: "border-transparent text-[#b2a397]"
								}`}
							>
								{item.title}
							</Link>
						</nav>
					))}
				</div>

				{/* Mobile Dropdown Menu */}
				<div
					className={`${
						isMenuOpen ? "max-h-96" : "max-h-0"
					} lg:hidden absolute top-full left-0 right-0 bg-gray2 shadow-lg flex-col items-center overflow-hidden transition-all duration-300 ease-in-out`}
				>
					{navItems.map((item) => (
						<nav key={item.id} className="w-full text-center p-4">
							<Link
								to={item.path}
								scroll={scroll}
								onClick={() => setIsMenuOpen(false)} // Close menu on click
								className={`font-hasweny text-lg uppercase font-medium border-b pb-2 tracking-widest ${
									activeSection === item.path
										? "border-[#b2a397] text-[#b2a397]"
										: "border-transparent text-[#b2a397]"
								}`}
							>
								{item.title}
							</Link>
						</nav>
					))}
				</div>
			</div>
		</div>
	);
};

export default Navbar;