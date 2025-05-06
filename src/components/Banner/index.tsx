import banner from "../../assets/images/sky3.jpg";
const Banner = () => {
	return (
		<div
			className="w-full md:h-[400px] h-[100px] pt-20  bg-fixed bg-cover relative z-[1]"
			style={{ backgroundImage: `url(${banner})`, backgroundPosition: "bottom" ,
		}}
		>
			<div className="w-full h-full md:  grid-cols-2 items-center justify-between  px-10 banner z-[2] md:py-0 py-5 text-center">
				<span className="text-white md:text-[55px] text-[40px] font-semibold ">
	ابحث عن رحلتك
				</span>
				<div className="flex md: grid-cols-2 items-center gap-10 md:mb-0 mb-2">
					<input
						type="text"
						placeholder="تحلق معنا "
						className="md:w-[500px] w-[400px] border border-slate-400 outline-none px-3 rounded-[10px] py-3"
					/>
						<input
						type="text"
						placeholder="السفر إلى"
						className="md:w-[500px] w-[400px] border border-slate-400 outline-none px-3 rounded-[10px] py-3"
					/>
						<input
						type="text"
						placeholder="ذهابا و إيابا"
						className="md:w-[500px] w-[400px] border border-slate-400 outline-none px-3 rounded-[10px] py-3"
					/>
						<input
						type="date"
						placeholder="متى"
						className="md:w-[500px] w-[400px] border border-slate-400 outline-none px-3 rounded-[10px] py-3"
					/>
						<input
						type="text"
						placeholder="عدد الأشخاص"
						className="md:w-[500px] w-[400px] border border-slate-400 outline-none px-3 rounded-[10px] py-3"
					/>
					
				</div>
				<button className="bg-blue-400 px-6 py-3 text-white font-semibold shadow-md rounded-[10px] max-w-[250px] mt-8">
						انضم إلى رحلتنا
					</button>
			</div>
		</div>
	);
};

export default Banner;
