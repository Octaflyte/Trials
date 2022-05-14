

function PriceComponent() {
  return (
		<div className="bg-gradient-to-b from-[#ebecf2] to-[#edeef3] h-screen ">
			<div className="flex flex-col-reverse md:flex-row p-10 md:p-20 justify-center">
				<div className="bg-gray-200  md:w-[30%] rounded-xl flex flex-col px-5 py-10 mr-2 mt-5 md:mt-0">
					<div className="text-gray-400">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-8 w-8"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
							/>
						</svg>
					</div>
					<div className="mt-5 max-w-max rounded-full text-sm font-bold uppercase px-4 py-2 bg-gradient-to-tr from-gray-400/30 to-gray-200/50 backdrop-blur-md tracking-wider">
						Regular Plan
					</div>
					<div className="flex flex-col mt-10 gap-y-4">
						<div className="flex flex-row items-center">
							<div className="p-[2px] text-gray-200 bg-blue-800/50 rounded-full">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-4 w-4"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="2"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M18 12H6"
									/>
								</svg>
							</div>

							<div className="text-sm font-semibold font-roboto tracking-wider text-gray-400 ml-2">
								<span className="text-gray-500">1 month free subscription</span> with 1 admin account
							</div>
						</div>
						<div className="flex flex-row items-center">
							<div className="p-[2px] text-gray-200 bg-gray-800/50 rounded-full">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-4 w-4"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="2"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</div>
							<div className="text-sm font-semibold font-roboto tracking-wider text-gray-400 ml-2">
								<span className="text-gray-500">No</span> ByteGIS credits
							</div>
						</div>
						<div className="flex flex-row items-center">
							<div className="p-[2px] text-gray-200 bg-blue-800/50 rounded-full">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-4 w-4"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="2"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M18 12H6"
									/>
								</svg>
							</div>
							<div className="text-sm font-semibold font-roboto tracking-wider text-gray-400 ml-2">
								<span className="text-gray-500">100 geometry objects</span>{" "}
								every month.
							</div>
						</div>
						<div className="flex flex-row items-center">
							<div className="p-[2px] text-gray-200 bg-blue-800/50 rounded-full">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-4 w-4"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="2"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M18 12H6"
									/>
								</svg>
							</div>
							<div className="text-sm font-semibold font-roboto tracking-wider text-gray-400 ml-2">
								<span className="text-gray-500">0.5 GB </span>storage
							</div>
						</div>
					</div>
					<div className="mt-10 text-center rounded-full text-sm font-bold uppercase px-4 py-2 bg-gradient-to-tr from-gray-400/50 to-gray-200/50 backdrop-blur-md tracking-wide">
						Join Byte GIS
					</div>
					<div className="mt-10 text-xs text-gray-400">
						* After these, pay as per demand
					</div>
				</div>
				<div className="bg-[#ED6A5A] h-full md:w-[30%] rounded-xl flex flex-col px-5 py-10">
					<div className="text-gray-200">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-8 w-8 "
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
							/>
						</svg>
					</div>
					<div className="mt-5 max-w-max rounded-full text-sm font-bold uppercase px-4 py-2 bg-gradient-to-tr from-gray-400/30 to-gray-200/50 backdrop-blur-md tracking-wider">
						Beta Trials
					</div>
					<div className="flex flex-col mt-10 gap-y-4">
						<div className="flex flex-row items-center">
							<div className="p-[2px] text-gray-200 bg-blue-800/50 rounded-full">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-4 w-4"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="3"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M5 13l4 4L19 7"
									/>
								</svg>
							</div>
							<div className="text-sm font-semibold font-roboto tracking-wider text-gray-200 ml-2">
								2 month free subscription with <span className="text-white">3 admin accounts included</span>
							</div>
						</div>
						<div className="flex flex-row items-center">
							<div className="p-[2px] text-gray-200 bg-blue-800/50 rounded-full">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-4 w-4"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="3"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M5 13l4 4L19 7"
									/>
								</svg>
							</div>
							<div className="text-sm font-semibold font-roboto tracking-wider text-gray-200 ml-2">
								ByteGIS credits for <span className="text-white">2 months</span>
							</div>
						</div>
						<div className="flex flex-row items-center">
							<div className="p-[2px] text-gray-200 bg-blue-800/50 rounded-full">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-4 w-4"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="3"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M5 13l4 4L19 7"
									/>
								</svg>
							</div>
							<div className="text-sm font-semibold font-roboto tracking-wider text-gray-200 ml-2">
								<span className="text-white">300 geometry objects</span> every
								month.
							</div>
						</div>
						<div className="flex flex-row items-center">
							<div className="p-[2px] text-gray-200 bg-blue-800/50 rounded-full">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-4 w-4"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									stroke-width="3"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M5 13l4 4L19 7"
									/>
								</svg>
							</div>
							<div className="text-sm font-semibold font-roboto tracking-wider text-gray-200 ml-2">
								<span className="text-white">2 GB </span>storage
							</div>
						</div>
					</div>
					<div className="mt-10 text-center rounded-full text-sm font-bold uppercase px-4 py-2 bg-gradient-to-tr from-gray-400/50 to-gray-200/50 backdrop-blur-md tracking-wide cursor-pointer">
						Early Pass
					</div>
					<div className="mt-10 text-xs text-gray-300">
						* After these, pay as per demand
					</div>
				</div>
			</div>
		</div>
	);
}

export default PriceComponent