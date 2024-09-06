import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import { navItems } from "../../data";
import { HashLink as Link } from "react-router-hash-link";
import { useEffect, useState } from "react";

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const sections = navItems.map(i => i.path.replace('#', ''));
    const [activeSection, setActiveSection] = useState<string>('');

    const scrollWithOffset = (el: HTMLElement) => {
        const yOffset = -60;
        const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    };

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
		<div className="w-full flex bg-gray2 lg:h-[60px] fixed top-0 left-0 right-0 shadow-md z-50">
			<div className="absolute top-3 px-12 w-full flex items-center justify-between">
				<div></div>
				{/*<img src={logo} alt="logo" />*/}
				<div className="hidden lg:flex items-center gap-10">
				<img className="h-10 w-30"
					src={logo}
					alt="logo"
				/>
                    {navItems.map((item) => (
                        <nav key={item.id}>
                            <Link
                                to={item.path}
                                scroll={scrollWithOffset}
                                className={`font-hasweny text-lg uppercase font-medium border-b pb-2 tracking-widest ${
                                    activeSection === item.path
                                        ? "border-[#b2a397] text-[#b2a397]"
                                        : "border-transparent text-[#b2a397]"
                                }`}
                            >{item.title}</Link>
                        </nav>
                    ))}
				</div>
                <div className="hidden lg:flex items-center gap-6">
                </div>
			</div>
		</div>
	);
};

export default Navbar;

                        {/*<a
                            href={item.path}
                            key={item.title}
                            
                            className={`font-hasweny text-lg uppercase font-medium border-b pb-2 tracking-widest ${
                                item.active
                                    ? "border-[#b2a397] text-[#b2a397]"
                                    : "border-transparent text-[#b2a397]"
                            }`}
                        >
                            {item.title}
                        </a>*/}