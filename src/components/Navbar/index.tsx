import { GridOutline } from "react-ionicons";
import { Link } from "react-router-dom";

const Navbar = () => {
	const navLinks = [
		{ title: "Home", path: "/", active:false },
		{ title: "FAQ", path: "/FAQ", active: false },
		{ title: "Contact", path: "/Contact", active: false },
		
		{ title: "About", path: "/About", active: false },
	];
	return (
		<div className="z-[2] w-full my-auto mx-0 h-16 md:px-[200px] px-8 py-10 flex items-center justify-between absolute top-[0px] bg-slate-900">
			<span className="text-white text-[28px] font-semibold">Logo.</span>
			<div className="md:flex hidden items-center gap-7">
				{navLinks.map((navLink) => {
					return (
						<Link
							to={navLink.path}
							key={navLink.title}
						>
							<span
								className={`font-medium ${navLink.active ? "text-blue-400" : "text-white"}`}
							>
								{navLink.title}
							</span>
						</Link>
					);
				})}
				<Link to="/BookNow" className="bg-blue-400 rounded-full text-gray-900 px-6 py-3 font-semibold hover:bg-gray-700 hover:text-white">
					Book Now
				</Link>
			</div>
			<div className="cursor-pointer md:hidden block">
				<GridOutline color="#fff" />
			</div>
		</div>
	);
};

export default Navbar;
