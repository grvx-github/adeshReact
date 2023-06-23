import React from "react";
import cImg1 from "../media/cImg1.webp"
import cImg2 from "../media/cImg2.webp"
import cImg3 from "../media/cImg3.webp"
import cImg4 from "../media/cImg4.webp"
export const Cards = () => {
	<div className="cardSection">
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-3">
					<div className="card bg-card-primary">
						<div className="card-img-top">
							<img src={cImg1} alt="" />
						</div>
						<h4 className="card-header">Natural</h4>
						<div className="card-text">
							<p>
								Our spices are made from the finest natural ingredients,
								ensuring that you get the best flavors without any harmful
								additives.
							</p>
						</div>
					</div>
				</div>
				<div className="col-md-3">
					<div className="card bg-card-secondary">
						<div className="card-img-top">
							<img src={cImg2} alt="" />
						</div>
						<h4 className="card-header">Healthy</h4>
						<div className="card-text">
							<p>
								Our spices are not only delicious but also packed with health
								benefits, helping you lead a healthier lifestyle.
							</p>
						</div>
					</div>
				</div>
				<div className="col-md-3">
					<div className="card bg-card-primary">
						<div className="card-img-top">
							<img src={cImg3} alt="" />
						</div>
						<h4 className="card-header">Flavor lock</h4>
						<div className="card-text">
							<p>
								We use the latest techniques to lock in the flavor and aroma of
								our spices, so you can enjoy their freshness and goodness for
								longer.
							</p>
						</div>
					</div>
				</div>
				<div className="col-md-3">
					<div className="card bg-card-secondary">
						<div className="card-img-top">
							<img src={cImg4} alt="" />
						</div>
						<h4 className="card-header">Pure Veg</h4>
						<div className="card-text">
							<p>
								Our spices are 100% pure and vegetarian, making them the perfect
								choice for anyone looking for a healthy and ethical food option.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
}