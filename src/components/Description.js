import React from "react";
export const Description = () => {
	return(
		<div className="thirdSection">
			<div className="fl floatingImg1">
				<img src="media/flImg1.png" alt="" />
			</div>
			<div className="fl floatingImg2">
				<img src="media/flImg2.png" alt="" />
			</div>
			<div className="fl floatingImg3">
				<img src="media/flImg3.webp" alt="" />
			</div>
			<div className="centerText">
				<h2>The Essence of Indian Spices</h2>
				<p>
					Welcome to Aadesh Masala, an Indian spices brand that is dedicated to
					bringing the flavors of traditional Indian cuisine to every household in
					India. Our mission is to provide the best quality spices to our
					customers, ensuring that every meal is full of flavor and packed with
					nutrition. Over the years, we have grown from a small local business to
					a national brand, serving customers across India. We take pride in our
					commitment to quality, sourcing the freshest and finest ingredients to
					make our spices. Our products are free from any harmful additives,
					ensuring that our customers can enjoy healthy and delicious meals.
				</p>
				<a href="#">
					<div className="vmBtn">
						<div className="btnClr" />
						<div className="btn-svg">
							<svg
								stroke="currentColor"
								fill="currentColor"
								strokeWidth={0}
								viewBox="0 0 1024 1024"
								height="1em"
								width="1em"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z"></path>
							</svg>
						</div>
						<div className="btn-text">View More</div>
					</div>
				</a>
			</div>
		</div>
	)
}