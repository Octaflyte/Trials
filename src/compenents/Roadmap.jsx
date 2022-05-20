import { useState } from "react";

const SideMenu = [
	{
		title: "Project Manager",
		description:
			"Manage projects efficiently by adding name & description all in one place",
		img: "https://betatrials.blob.core.windows.net/assests/management.webp",
		gif: "https://betatrials.blob.core.windows.net/assests/roadmap_project.webp",
	},
	{
		title: "UAV data processing",
		description:
			"Simply upload drone images and our platform will start processing them.",
		img: "https://betatrials.blob.core.windows.net/assests/drone.webp",
		gif: "https://betatrials.blob.core.windows.net/assests/roadmap_processing.webp",
	},
	{
		title: "View layers, annotate & measure them",
		description: "Orthomosaics & elevation with our powerful geometry toolbar",
		img: "https://betatrials.blob.core.windows.net/assests/measure.webp",
		gif: "https://betatrials.blob.core.windows.net/assests/roadmap_view.webp",
	},
	{
		title: "Detect objects, classify scenes using AI",
		description:
			"Custom ML models to perform classification and object detection",
		img: "https://betatrials.blob.core.windows.net/assests/analysis.webp",
		gif: "https://betatrials.blob.core.windows.net/assests/roadmap_ai.webp",
	},
	{
		title: "Share and collaborate with teams",
		description:
			"Teams can work simultaneously on large feature layers and map.",
		img: "https://betatrials.blob.core.windows.net/assests/collaborate.webp",
		gif: "https://betatrials.blob.core.windows.net/assests/roadmap_collab.webp",
	},
];

function Roadmap() {
	const [selectedId, SetselectedId] = useState(0);
	return (
		<div className="bg-gradient-to-b to-[#ebecf2] from-[#edeef3] h-screen">
			<div className="flex flex-col-reverse md:flex-row px-10 md:px-20 py-20 md:items-center">
				<div className="w-full  md:w-3/5 mt-5 md:mt-0 md:mr-6 ">
					<img
						src={SideMenu[selectedId].gif}
						className=" rounded-md shadow-xl h-[50vh] lg:h-auto"
					/>
				</div>
				<div className="w-full md:w-2/5">
					<div className="text-2xl font-bold font-roboto text-gray-900 tracking-wide">
						A platform to manage, process, annotate, classify and share your map
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
