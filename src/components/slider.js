import React from "react";
import Slider from "react-slick";
// import 'react-slick/dist/react-slick.css';

import $ from "jquery";

const SliderCards = [{
	id: 1,
	src: "Images/1.png",
	alt: "Image 1"
},
{
	id: 2,
	src: "Images/2.png",
	alt: "Image 2 "
},
{
	id: 3,
	src: "Images/3.png",
	alt: "Image 3"
}
];
export default SliderCards;

export const SimpleSlider = () => {
	var settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: $('.prev-arr'),
		nextArrow: $('.next-arr'),
		lazyLoad: "ondemand",
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		],
	}

	return(
		<Slider {...settings}>
		<div className="sliderSection">
		<div className="titleWrap">
			<h2>Spice Up Your Meals with Aadesh Masale</h2>
		</div>
		<div className="sliderContainer">
			<div className="homeSlider">
				<a href="#">
					<div className="card">
						<div className="card-elements">
							<div className="card-img-container">
								<img className="card-img-top" src="media/slider1.webp" alt="" />
							</div>
							<h5 className="card-title">Chiken Tikka Masala</h5>
						</div>
					</div>
				</a>
				<a href="#">
					<div className="card">
						<div className="card-elements">
							<div className="card-img-container">
								<img className="card-img-top" src="media/slider2.webp" alt="" />
							</div>
							<h5>Aloo Gobi</h5>
						</div>
					</div>
				</a>
				<a href="#">
					<Slider {...settings}>
						{SliderCards.map((item => (
							<div key={item.id} className="card">
								<div className="card-elements">
									<div className="card-img-container">
										<img className="card-img-top" src={item.src} alt={item.alt} />
									</div>
									<h5>Chicken Biriyani</h5>
								</div>
							</div>
						)))}
					</Slider>
				</a>
				<a href="#">
					<Slider {...settings}>
						{SliderCards.map((item => (
							<div key={item.key} className="card">
								<div className="card-elements">
									<div className="card-img-container">
										<img className="card-img-top" src={item.src} alt="" />
									</div>
									<h5 className="card-title">Dahl with Spinach</h5>
								</div>
							</div>
						)))}
								
					</Slider>
					
				</a>
				<a href="#">
					<div className="card">
						<div className="card-elements">
							<div className="card-img-container">
								<img className="card-img-top" src="media/slider5.webp" alt="" />
							</div>
							<h5>Tandoori Chicken</h5>
						</div>
					</div>
				</a>
				<a href="#">
					<div className="card">
						<div className="card-elements">
							<div className="card-img-container">
								<img className="card-img-top" src="media/slider6.webp" alt="" />
							</div>
							<h5>Veg Biriyani</h5>
						</div>
					</div>
				</a>
				<a href="#">
					<div className="card">
						<div className="card-elements">
							<div className="card-img-container">
								<img className="card-img-top" src="media/slider7.webp" alt="" />
							</div>
							<h5>Butter Chicken</h5>
						</div>
					</div>
				</a>
				<a href="#">
					<div className="card">
						<div className="card-elements">
							<div className="card-img-container">
								<img className="card-img-top" src="media/slider8.webp" alt="" />
							</div>
							<h5 className="card-title">Matar Paneer</h5>
						</div>
					</div>
				</a>
				<a href="#">
					<div className="card">
						<div className="card-elements">
							<div className="card-img-container">
								<img className="card-img-top" src="media/slider9.webp" alt="" />
							</div>
							<h5 className="card-title">Palak Paneer Curry</h5>
						</div>
					</div>
				</a>
			</div>
			<div className="arrow prev-arr">
				<svg
					stroke="currentColor"
					fill="currentColor"
					strokeWidth={0}
					viewBox="0 0 24 24"
					height="1em"
					width="1em"
					xmlns="http://www.w3.org/2000/svg"
				>
					<polyline
						fill="none"
						stroke="#000"
						strokeWidth={2}
						points="7 2 17 12 7 22"
						transform="matrix(-1 0 0 1 24 0)"
					></polyline>
				</svg>
			</div>
			<div className="arrow next-arr">
				<svg
					stroke="currentColor"
					fill="currentColor"
					strokeWidth={0}
					viewBox="0 0 24 24"
					height="1em"
					width="1em"
					xmlns="http://www.w3.org/2000/svg"
				>
					<polyline
						fill="none"
						stroke="#000"
						strokeWidth={2}
						points="7 2 17 12 7 22"
					/>
				</svg>
			</div>
		</div>
	</div>
		 </Slider>
	)
}