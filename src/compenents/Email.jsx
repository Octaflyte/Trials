import WelcomeLogo from "../assets/welcome.svg";

function Email() {
	return (
		<div className="bg-gradient-to-b to-[#ebecf2] from-[#edeef3] p-10 md:p-20 justify-center md:justify-around flex flex-col md:flex-row h-screen items-center " id="enquire">
			<div className="w-full md:w-[40%] mt-10 md:mt-0">
				<img src={WelcomeLogo} alt-=".." />
			</div>
			<div className="h-full w-full md:w-[40%] mt-10 md:mt-0 flex flex-col justify-center">
				<div>
					<div className="text-5xl font-bold text-[#ED6A5A] tracking-wider">
						Byte Gis
					</div>
					<div className="text-2xl font-semibold tracking-wide mt-5 text-gray-800">
						Unfold your wings by signing up !
					</div>
				</div>
				<div className="relative  mt-10">
					<div className="absolute right-0 font-semibold font-roboto text-sm py-3 px-6 rounded-full bg-[#ED6A5A] text-gray-200 cursor-pointer hover:animate-pulse">
						Let's Do It
					</div>
					<input
						className="w-full px-8 py-3 rounded-full bg-gray-300 shadow-xl outline-none  focus:ring-2 focus:ring-gray-600 font-semibold font-roboto text-sm placeholder:text-gray-500 tracking-wide"
						placeholder="Your email address"
					/>
				</div>
			</div>
		</div>
	);
}

export default Email;
