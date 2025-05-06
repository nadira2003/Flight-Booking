import plane from "../../assets/images/plane.png";


const Hero = () => {
	return (
		<div className="hero z-[1] w-full h-[130vh] grid place-items-center bg-[#141b2b] relative">
			<div className="flex md:flex-row flex-col items-center w-full md: px-2 justify-between md:gap-0 gap-28">
				<div className="flex flex-col gap-3 left-animation w-full">
				
					<span className="text-white font-medium md:text-[55px] text-[45px] pt-28">
					حلّق معنا، وخلّي وجهتك أقرب ممّا تتخيل!
					</span>
					<span className="text-white font-medium text-[60px]"></span>
					<span className="text-white leading-7 max-w-[500px] text-justify">
					احجز رحلتك بكل سهولة، بثواني، وبثقة تامة. شركتنا السورية للطيران بتقدملك خدمات حجز مرنة، أسعار منافسة، وتجربة سفر واغاتا بمعنى الكلمة.
					</span>
					<div className="flex items-center gap-7 mt-5">
						<a href="/BookNow" className="bg-blue-400 px-6 py-3 text-gray-900 font-semibold rounded-full">
						حجز رحلة


						</a>
						<a  href="/Contact" className="border-[2px] border-blue-400 px-6 py-3 text-white font-semibold rounded-full">
						اتصل بنا
						</a>
					</div>
				</div>
				<img
					src={plane}
					className="md:w-[50%] w-full right-animation pb-11"
					alt=""
				/>
			</div>
		</div>
	);
};

export default Hero;
