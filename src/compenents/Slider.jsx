import Slider from "react-slick";
import ProcessIll from "../assets/procees_ill.svg";
import WebAppIll from "../assets/webapp_ill.svg";
import AnayliseIll from "../assets/anaylise_ill.svg";
import CollabrateIll from "../assets/collabrate_ill.svg";
import SavingIll from "../assets/saving_ill.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState } from "react";

const SliderComponent = () => {
	const sliderref = useRef();
	const [selectedIndex,SetselectedIndex]=useState(0);
	const settings = {
		arrows: false,
		speed: 700,
		beforeChange:(_,index)=>{
			SetselectedIndex(index);
		},
	};
	return (
		<div className="bg-gradient-to-b to-[#ebecf2] from-[#edeef3] md:h-screen overflow-hidden flex flex-col ">
			<div className="hidden md:flex flex-row justify-center items-center gap-x-6 mt-10 mb-5">
				<div className="flex flex-col items-center">
					<img
						src="https://cdn.discordapp.com/attachments/869221017015439420/963140463014072320/process.png"
						alt="procees"
						height={50}
						width={50}
						className={
							selectedIndex == 0
								? "opacity-100 cursor-pointer"
								: "opacity-60 cursor-pointer"
						}
						onClick={() => sliderref.current.slickGoTo(0)}
					/>
					<div
						className={
							selectedIndex == 0
								? "text-xs text-[#ED6A5A] font-semibold tracking-wider font-roboto mt-2"
								: "text-xs text-gray-500 font-bold tracking-wider font-roboto mt-2"
						}
					>
						PROCESS
					</div>
				</div>
				<div className="text-gray-500">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-8 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M9 5l7 7-7 7"
						/>
					</svg>
				</div>
				<div className="flex flex-col items-center">
					<img
						src="https://cdn.discordapp.com/attachments/869221017015439420/963140463693557831/app.png"
						alt="procees"
						height={50}
						width={50}
						className={
							selectedIndex == 1
								? "opacity-100 cursor-pointer"
								: "opacity-60 cursor-pointer"
						}
						onClick={() => sliderref.current.slickGoTo(1)}
					/>
					<div
						className={
							selectedIndex == 1
								? "text-xs text-[#ED6A5A] font-semibold tracking-wider font-roboto mt-2"
								: "text-xs text-gray-500 font-bold tracking-wider font-roboto mt-2"
						}
					>
						Web App
					</div>
				</div>
				<div className="text-gray-500">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-8 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M9 5l7 7-7 7"
						/>
					</svg>
				</div>
				<div className="flex flex-col items-center">
					<img
						src="https://cdn.discordapp.com/attachments/869221017015439420/963140462749818890/analyse.png"
						alt="procees"
						height={50}
						width={50}
						className={
							selectedIndex == 2
								? "opacity-100 cursor-pointer"
								: "opacity-60 cursor-pointer"
						}
						onClick={() => sliderref.current.slickGoTo(2)}
					/>
					<div
						className={
							selectedIndex == 2
								? "text-xs text-[#ED6A5A] font-semibold tracking-wider font-roboto mt-2"
								: "text-xs text-gray-500 font-bold tracking-wider font-roboto mt-2"
						}
					>
						ANAYLISE
					</div>
				</div>
				<div className="text-gray-500">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-8 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M9 5l7 7-7 7"
						/>
					</svg>
				</div>
				<div className="flex flex-col items-center">
					<img
						src="https://cdn.discordapp.com/attachments/869221017015439420/963140463496413224/collaboration.png"
						alt="procees"
						height={50}
						width={50}
						className={
							selectedIndex == 3
								? "opacity-100 cursor-pointer"
								: "opacity-60 cursor-pointer"
						}
						onClick={() => sliderref.current.slickGoTo(3)}
					/>
					<div
						className={
							selectedIndex == 3
								? "text-xs text-[#ED6A5A] font-semibold tracking-wider font-roboto mt-2"
								: "text-xs text-gray-500 font-bold tracking-wider font-roboto mt-2"
						}
					>
						COLLOBRATE
					</div>
				</div>
				<div className="text-gray-500">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-8 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M9 5l7 7-7 7"
						/>
					</svg>
				</div>
				<div className="flex flex-col items-center">
					<img
						src="https://cdn.discordapp.com/attachments/869221017015439420/963140463286685776/savings.png"
						alt="procees"
						height={50}
						width={50}
						className={
							selectedIndex == 4
								? "opacity-100 cursor-pointer"
								: "opacity-60 cursor-pointer"
						}
						onClick={() => sliderref.current.slickGoTo(4)}
					/>
					<div
						className={
							selectedIndex == 4
								? "text-xs text-[#ED6A5A] font-semibold tracking-wider font-roboto mt-2"
								: "text-xs text-gray-500 font-bold tracking-wider font-roboto mt-2"
						}
					>
						SAVINGS
					</div>
				</div>
			</div>
			<div className="px-5 md:px-20 flex flex-row items-center justify-around">
				<div
					className="hidden md:block text-gray-400 cursor-pointer"
					onClick={() => sliderref.current.slickPrev()}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-10 w-10"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M15 19l-7-7 7-7"
						/>
					</svg>
				</div>
				<div className="flex flex-col mt-10 md:hidden">
					<div>
						<div className="flex flex-col md:flex-row bg-gray-100 shadow-lg rounded-lg p-10 md:p-20 m-5">
							<div className="w-full md:w-1/2">
								<img src={ProcessIll} className="h-64" />
							</div>
							<div className="w-full md:w-1/2 flex flex-col justify-around ml-5">
								<div className="text-3xl text-gray-600 font-bold font-roboto tracking-wide">
									Process
								</div>
								<div className="text-lg text-gray-500 font-semibold font-roboto">
									Just upload the UAV captured images and ByteGIS will process
									these at scale to deliver you orthomosaics and DSMs on time.
									Notification will be sent once datasets are ready.
								</div>
							</div>
						</div>
					</div>
					<div>
						<div className="flex flex-col md:flex-row bg-gray-100 shadow-lg rounded-lg p-10 md:p-20 m-5">
							<div className="w-full md:w-1/2">
								<img src={WebAppIll} className="h-64" />
							</div>
							<div className="w-full md:w-1/2 flex flex-col justify-around ml-5">
								<div className="text-3xl text-gray-600 font-bold font-roboto tracking-wide">
									Web App
								</div>
								<div className="text-lg text-gray-500 font-semibold font-roboto">
									ByteGIS comes with a web app where you can view these datasets
									anytime with popular base layers, just by simply logging in.
									It also has a powerful geometry editor that can be used to
									draw geometries. Now create your own feature layers, training
									data sets and annotate maps.
								</div>
							</div>
						</div>
					</div>
					<div>
						<div className="flex flex-col md:flex-row bg-gray-100 shadow-lg rounded-lg p-10 md:p-20 m-5">
							<div className="w-full md:w-1/2">
								<img src={AnayliseIll} className="h-64" />
							</div>
							<div className="w-full md:w-1/2 flex flex-col justify-around ml-5">
								<div className="text-3xl text-gray-600 font-bold font-roboto tracking-wide">
									Analyze
								</div>
								<div className="text-lg text-gray-500 font-semibold font-roboto">
									Use pre-trained models to run analysis on your orthomosaics.
									Now automatically classifies vegetation, buildings and cars.
									You can also train your own custom models. Draw geometries
									over your layers to measure lengths, areas & volumes.
								</div>
							</div>
						</div>
					</div>
					<div>
						<div className="flex flex-col md:flex-row bg-gray-100 shadow-lg rounded-lg p-10 md:p-20 m-5">
							<div className="w-full md:w-1/2">
								<img src={CollabrateIll} className="h-64" />
							</div>
							<div className="w-full md:w-1/2 flex flex-col justify-around ml-5">
								<div className="text-3xl text-gray-600 font-bold font-roboto tracking-wide">
									Collaborate
								</div>
								<div className="text-lg text-gray-500 font-semibold font-roboto">
									Share these projects with your stakeholders and team just by
									sharing URLs. View real-time edits made by your team for
									smooth collaboration. All your projects are listed together in
									one place, making it easy to handle multiple projects.
								</div>
							</div>
						</div>
					</div>
					<div>
						<div className="flex flex-col md:flex-row bg-gray-100 shadow-lg rounded-lg p-10 md:p-20 m-5">
							<div className="w-full md:w-1/2">
								<img src={SavingIll} className="h-64" />
							</div>
							<div className="w-full md:w-1/2 flex flex-col justify-around ml-5">
								<div className="text-3xl text-gray-600 font-bold font-roboto tracking-wide">
									Savings
								</div>
								<div className="text-lg text-gray-500 font-semibold font-roboto">
									Build custom subscription plans as per the needs of your
									organization to maximize your savings.
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="hidden md:block md:w-[98%]">
					<Slider {...settings} ref={sliderref}>
						<div>
							<div className="flex flex-col md:flex-row bg-gray-100 shadow-lg rounded-lg p-10 md:p-20 m-5">
								<div className="w-full md:w-1/2">
									<img src={ProcessIll} className="h-64" />
								</div>
								<div className="w-full md:w-1/2 flex flex-col justify-around ml-5">
									<div className="text-3xl text-gray-600 font-bold font-roboto tracking-wide">
										Process
									</div>
									<div className="text-lg text-gray-500 font-semibold font-roboto">
										Just upload the UAV captured images and ByteGIS will process
										these at scale to deliver you orthomosaics and DSMs on time.
										Notification will be sent once datasets are ready.
									</div>
								</div>
							</div>
						</div>
						<div>
							<div className="flex flex-col md:flex-row bg-gray-100 shadow-lg rounded-lg p-10 md:p-20 m-5">
								<div className="w-full md:w-1/2">
									<img src={WebAppIll} className="h-64" />
								</div>
								<div className="w-full md:w-1/2 flex flex-col justify-around ml-5">
									<div className="text-3xl text-gray-600 font-bold font-roboto tracking-wide">
										Web App
									</div>
									<div className="text-lg text-gray-500 font-semibold font-roboto">
										ByteGIS comes with a web app where you can view these
										datasets anytime with popular base layers, just by simply
										logging in. It also has a powerful geometry editor that can
										be used to draw geometries. Now create your own feature
										layers, training data sets and annotate maps.
									</div>
								</div>
							</div>
						</div>
						<div>
							<div className="flex flex-col md:flex-row bg-gray-100 shadow-lg rounded-lg p-10 md:p-20 m-5">
								<div className="w-full md:w-1/2">
									<img src={AnayliseIll} className="h-64" />
								</div>
								<div className="w-full md:w-1/2 flex flex-col justify-around ml-5">
									<div className="text-3xl text-gray-600 font-bold font-roboto tracking-wide">
										Analyze
									</div>
									<div className="text-lg text-gray-500 font-semibold font-roboto">
										Use pre-trained models to run analysis on your orthomosaics.
										Now automatically classifies vegetation, buildings and cars.
										You can also train your own custom models. Draw geometries
										over your layers to measure lengths, areas & volumes.
									</div>
								</div>
							</div>
						</div>
						<div>
							<div className="flex flex-col md:flex-row bg-gray-100 shadow-lg rounded-lg p-10 md:p-20 m-5">
								<div className="w-full md:w-1/2">
									<img src={CollabrateIll} className="h-64" />
								</div>
								<div className="w-full md:w-1/2 flex flex-col justify-around ml-5">
									<div className="text-3xl text-gray-600 font-bold font-roboto tracking-wide">
										Collaborate
									</div>
									<div className="text-lg text-gray-500 font-semibold font-roboto">
										Share these projects with your stakeholders and team just by
										sharing URLs. View real-time edits made by your team for
										smooth collaboration. All your projects are listed together
										in one place, making it easy to handle multiple projects.
									</div>
								</div>
							</div>
						</div>
						<div>
							<div className="flex flex-col md:flex-row bg-gray-100 shadow-lg rounded-lg p-10 md:p-20 m-5">
								<div className="w-full md:w-1/2">
									<img src={SavingIll} className="h-64" />
								</div>
								<div className="w-full md:w-1/2 flex flex-col justify-around ml-5">
									<div className="text-3xl text-gray-600 font-bold font-roboto tracking-wide">
										Savings
									</div>
									<div className="text-lg text-gray-500 font-semibold font-roboto">
										Build custom subscription plans as per the needs of your
										organization to maximize your savings.
									</div>
								</div>
							</div>
						</div>
					</Slider>
				</div>
				<div
					className="hidden md:block text-gray-400 cursor-pointer"
					onClick={() => sliderref.current.slickNext()}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-10 w-10"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M9 5l7 7-7 7"
						/>
					</svg>
				</div>
			</div>
		</div>
	);
};
export default SliderComponent;
