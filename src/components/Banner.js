import React from "react";
import video from '../media/home-video.mp4'
export const Banner = () => {
	return(
		<div className="bannerSection">
			<div className="container">
				<video src={video} />
			</div>
		</div>
	)
}
