import ReactFreezeframe from "react-freezeframe";
import MailGif from "../assets/mail.gif";
import YouTubeGif from "../assets/youtube.gif";
import Linkedin from "../assets/linkden.gif";
import InstaGif from "../assets/insta.gif";
function Footer() {
  return (
		<div className="bg-gray-300 ">
			<div className="flex flex-row justify-center items-center py-3 gap-x-8">
				<a className="cursor-pointer" href="mailto:info@octaflyte.com">
					<ReactFreezeframe src={MailGif} />
				</a>
				<a
					className="cursor-pointer"
					href="https://www.youtube.com/channel/UCLAwqku3_MP1t_OD816RhQg"
					target="_blank"
				>
					<ReactFreezeframe src={YouTubeGif} />
				</a>
				<a
					className="cursor-pointer"
					href="https://www.linkedin.com/company/octaflyte"
					target="_blank"
				>
					<ReactFreezeframe src={Linkedin} />
				</a>
				<a
					className="cursor-pointer"
					href="https://www.instagram.com/octaflyte/"
					target="_blank"
				>
					<ReactFreezeframe src={InstaGif} />
				</a>
			</div>
			<div className="text-gray-700 text-center font-roboto text-sm font-semibold py-2 px-2">
				{" "}
				Copyright © ByteGis . All Rights Reserved
			</div>
		</div>
	);
}

export default Footer