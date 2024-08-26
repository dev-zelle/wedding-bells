import { navItems } from "../../data";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
    return (
        <div className="w-full flex bg-gray2 lg:h-[60px]">
            <div className="absolute top-3 px-12 w-full flex items-center justify-between">
                <div></div>
                {/*<img src={logo} alt="logo" />*/}
                <div className="hidden lg:flex items-center gap-10">
                    {navItems.map((item, index) => (
                        <nav>
                            <Link key={index} className={`font-hasweny text-lg uppercase font-medium border-b pb-2 tracking-widest ${
                                item.active
                                    ? "border-[#b2a397] text-[#b2a397]"
                                    : "border-transparent text-[#b2a397]"
                            }`} to={item.path}>{item.title}</Link>
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