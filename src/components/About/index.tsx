import { CheckmarkCircleOutline } from "react-ionicons";
import mask from "../../assets/images/mask.png";

const About = () => {
	return (
		<div className="w-full md:px-[0px]  flex md:flex-row flex-col items-center justify-between  md:gap-0 gap-16">
			<div
				className="md:w-[45%] md:h-[600px] w-[50%] h-[300px] bg-no-repeat bg-cover relative plane-mask"
				style={{ backgroundImage: `url(${mask})` }}
			/>
			<div className="flex flex-col md:w-[48%] w-full md:px-0 px-8">
				<span className="text-[15px] text-blue-600 font-semibold">من نحن </span>
				<span className="text-[30px] font-medium text-gray-700 mt-1">
				
نحن هنا لنقدم لك كل <br / > الراحة والمتعة


				</span>
				<p className="max-w-[650px] text-gray-600 leading-7 mt-5">
				من قلب الشام… بنحمل الحلم السوري على جناحاتنا، ونطير فيك فوق الغيوم نحو مستقبل أفضل. شركتنا تأسست على فكرة بسيطة: "الرحلة مو بس وسيلة، هي تجربة". بخبرتنا، وأسعارنا، وبخدماتنا، بنحول كل رحلة لذكرى حلوة
				</p>
			
				<button className="bg-blue-400 px-6 py-3 text-white font-semibold rounded-full w-[200px] mt-12 shadow-md">
				اكتشف المزيد
				</button>
			</div>
		</div>
	);
};

export default About;
