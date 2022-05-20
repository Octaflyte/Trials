import WelcomeLogo from "../assets/welcome.svg";

function Email() {
	return (
		<div
			className="bg-gradient-to-b to-[#ebecf2] from-[#edeef3] p-10 md:p-20 justify-center md:justify-around flex flex-col md:flex-row h-screen items-center "
			id="enquire"
		>
			<div className="w-full  md:w-[40%] mt-4 md:mt-0">
				<img src={WelcomeLogo} alt-=".." />
			</div>
			<div className="h-full w-full md:w-[40%] mt-2 md:mt-0 flex flex-col justify-center">
				<div>
					<div className="text-5xl font-bold text-[#ED6A5A] tracking-wider">
						Byte Gis
					</div>
					<div className="text-2xl font-semibold tracking-wide mt-5 text-gray-800">
						Unfold your wings by signing up !
					</div>
				</div>
				<div className="mt-8">
					<a
						href="https://forms.gle/R8KTh96A6DxifdAr6"
						target="_blank"
						className="inline text-sm text-gray-100 tracking-[0.2rem] bg-[#ED6A5A] font-bold font-roboto px-10 py-4 rounded-xl shadow-lg cursor-pointer hover:animate-pulse"
					>
						Let's Do It
					</a>
				</div>
			</div>
		</div>
	);
}

export default Email;
