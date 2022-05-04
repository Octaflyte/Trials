import ProjectGif from "../assets/roadmap_project.gif";
import ProcessingGif from "../assets/roadmap_processing.gif";
import ManagmentPng from "../assets/management.png";
import ViewPng from "../assets/roadmap_view.gif";
import AIpng from "../assets/roadmap_ai.png";
import ShareGig from "../assets/roadmap_collab.gif";
import DronePng from "../assets/drone.png";
import AnalysisPng from "../assets/analysis.png";
import MeasurePng from "../assets/measure.png";

import CollaboratePng from "../assets/collaborate.png";
import { useState } from "react";

const SideMenu = [
	{
		title: "Project Manager",
		description:
			"Manage projects efficiently by adding name & description all in one place",
		img: ManagmentPng,
		gif: ProjectGif,
	},
	{
		title: "UAV data processing",
		description:
			"Simply upload drone images and our platform will start processing them.",
		img: DronePng,
		gif: ProcessingGif,
	},
	{
		title: "View layers, annotate & measure them",
		description: "Orthomosaics & elevation with our powerful geometry toolbar",
		img: MeasurePng,
		gif: ViewPng,
	},
	{
		title: "Detect objects, classify scenes using AI",
		description:
			"Custom ML models to perform classification and object detection",
		img: AnalysisPng,
		gif: AIpng,
	},
	{
		title: "Share and collaborate with teams",
		description:
			"Teams can work simultaneously on large feature layers and map.",
		img: CollaboratePng,
		gif: ShareGig,
	},
];

function Roadmap() {
	const [selectedId, SetselectedId] = useState(0);
	return (
		<div className="bg-gradient-to-b to-[#ebecf2] from-[#edeef3] h-screen">
			<div className="flex flex-col-reverse md:flex-row px-10 md:px-20 py-20">
				<div className="w-full  md:w-3/5 mt-5 md:mt-0 md:mr-6 ">
					<img
						src={SideMenu[selectedId].gif}
						className=" rounded-md shadow-xl h-[50vh] lg:h-auto"
					/>
				</div>
				<div className="w-full md:w-2/5">
					<div className="text-2xl font-bold font-roboto text-gray-900 tracking-wide">
						A platform to manage, process, annotate, classify and share your
						map
					</div>
					<div className="flex flex-row md:flex-col mt-6 gap-y-6 gap-x-4 justify-center">
						{SideMenu.map((obj, i) => (
							<div
								className="flex flex-row items-center cursor-pointer group"
								key={i}
								onMouseEnter={() => SetselectedId(i)}
							>
								<img
									src={obj.img}
									className={
										selectedId === i
											? "pr-4 w-12  opacity-100 transition duration-150"
											: "pr-4 w-12 opacity-50 transition duration-150"
									}
								/>
								<div className="hidden md:flex flex-col justify-center">
									<div
										className={
											selectedId === i
												? "text-[#ED6A5A] text-xl font-bold  transition duration-150"
												: "text-xl font-bold text-gray-500 transition duration-15"
										}
									>
										{obj.title}
									</div>
									<div
										className={
											selectedId === i
												? "text-xs text-gray-600 font-medium  group transition duration-150 hidden lg:block"
												: "text-xs text-gray-400 font-medium  group transition duration-150 hidden lg:block"
										}
									>
										{obj.description}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Roadmap;
