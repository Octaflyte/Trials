const Home = () => {
	return (
		<div
			className="md:bg-gradient-to-b from-[#ebecf2] to-[#edeef3] h-screen "
			id="home"
		>
			<div className="flex w-full h-screen">
				<div className="lg:w-2/5 px-10 md:px-20 py-20 flex flex-col ">
					<div className="flex flex-row gap-x-10 md:gap-x-20 font-roboto">
						<a
							className="font-xs font-extrabold text-gray-500 uppercase tracking-wider cursor-pointer"
							href="#"
						>
							Home
						</a>
						<a
							className="font-xs font-extrabold text-gray-500 uppercase tracking-wider"
							href="#about"
						>
							About
						</a>
						<a
							className="font-xs font-extrabold text-gray-500 uppercase tracking-wider"
							href="#price"
						>
							Pricing
						</a>
					</div>
					<div className="mt-44">
						<div className="text-3xl font-[600] font-roboto text-gray-600 tracking-widest leading-normal">
							<span className="text-[#ED6A5A]">Byte Gis</span>, Collaborative
							platform for handling GIS data
						</div>
						<div className="mt-6 text-lg font-roboto text-gray-500 tracking-wide font-medium">
							No-Code Solution to access and analyse your geo-data
						</div>
						<div className="mt-8">
							<a
								className="inline text-xs text-gray-100 tracking-[0.2rem] bg-gradient-to-tr from-gray-500 to-gray-400 font-bold font-roboto px-10 py-4 rounded-xl shadow-lg "
								href="#enquire"
							>
								ENQUIRE
							</a>
						</div>
					</div>
				</div>
				<div className="absolute -z-10 md:relative md:z-0 md:block md:w-3/5 overflow-hidden">
					<img
						src="https://betatrials.blob.core.windows.net/assests/bg.webp"
						alt="bg"
						className="h-screen md:w-full md:h-full lg:ml-10"
					/>
				</div>
			</div>
		</div>
	);
};
export default Home;
