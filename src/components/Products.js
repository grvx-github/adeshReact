import React from "react";
import all1 from "../media/allProducts/1.webp";
import all2 from "../media/allProducts/2.webp";
import all3 from "../media/allProducts/3.webp";
import all4 from "../media/allProducts/4.webp";
import all5 from "../media/allProducts/5.webp";
import all6 from "../media/allProducts/6.webp";
import all7 from "../media/allProducts/7.webp";
import all8 from "../media/allProducts/8.webp";
import all9 from "../media/allProducts/9.webp";
import all10 from "../media/allProducts/10.webp";
import all11 from "../media/allProducts/11.webp";
import all12 from "../media/allProducts/12.webp";
import all13 from "../media/allProducts/13.webp";
import all14 from "../media/allProducts/14.webp";
import all15 from "../media/allProducts/15.webp";
import all16 from "../media/allProducts/16.webp";
import all17 from "../media/allProducts/17.webp";
import all18 from "../media/allProducts/18.webp";
import all19 from "../media/allProducts/19.webp";
import all20 from "../media/allProducts/20.webp";
import all21 from "../media/allProducts/21.webp";
import all22 from "../media/allProducts/22.webp";
import all23 from "../media/allProducts/23.webp";
import all24 from "../media/allProducts/24.webp";

export const Products = () => {

	return(
		<div className="productsSection">
			<h2>Our Products</h2>
			<ul className="nav nav-tabs" id="myTab" role="tablist">
				<li className="nav-item" role="presentation">
					<button
						className="nav-link active"
						id="all-tab"
						data-bs-toggle="tab"
						data-bs-target="#all-tab-pane"
						type="button"
						role="tab"
						aria-controls="home-tab-pane"
						aria-selected="true"
					>
						All
					</button>
				</li>
				<li className="nav-item" role="presentation">
					<button
						className="nav-link"
						id="blended-tab"
						data-bs-toggle="tab"
						data-bs-target="#blended-tab-pane"
						type="button"
						role="tab"
						aria-controls="profile-tab-pane"
						aria-selected="false"
					>
						Blended
					</button>
				</li>
				<li className="nav-item" role="presentation">
					<button
						className="nav-link"
						id="grounded-tab"
						data-bs-toggle="tab"
						data-bs-target="#grounded-tab-pane"
						type="button"
						role="tab"
						aria-controls="contact-tab-pane"
						aria-selected="false"
					>
						Grounded
					</button>
				</li>
				<li className="nav-item" role="presentation">
					<button
						className="nav-link"
						id="other-tab"
						data-bs-toggle="tab"
						data-bs-target="#other-tab-pane"
						type="button"
						role="tab"
						aria-controls="other-tab-pane"
						aria-selected="false"
					>
						Other
					</button>
				</li>
			</ul>
			<div className="tab-content" id="myTabContent">
				<div
					className="tab-pane fade show active allTab"
					id="all-tab-pane"
					role="tabpanel"
					aria-labelledby="home-tab"
					tabIndex={0}>
					<div className="productsHome">
						<div className="homeProduct">
							<img src={all1} alt="" />
						</div>
						<div className="homeProduct">
							<img src={all2} alt="" />
						</div>
						<div className="homeProduct">
							<img src={all3} alt="" />
						</div>
						<div className="homeProduct">
							<img src={all4} alt="" />
						</div>
						<div className="homeProduct">
							<img src={all5} alt="" />
						</div>
						<div className="homeProduct">
							<img src={all6} alt="" />
						</div>
						<div className="homeProduct">
							<img src={all7} alt="" />
						</div>
						<div className="homeProduct">
							<img src={all8} alt="" />
						</div>
						<div className="homeProduct">
							<img src={all9} alt="" />
						</div>
						<div className="homeProduct">
							<img src={all10} alt="" />
						</div>
						<div className="homeProduct">
							<img src={all11} alt="" />
						</div>
						<div className="homeProduct">
							<img src={all12} alt="" />
						</div>
						<div className="homeProduct">
							<img src={all13} alt="" />
						</div>
						<div className="homeProduct">
							<img src={all14} alt="" />
						</div>
						<div className="homeProduct">
							<img src={all15} alt="" />
						</div>
						<div className="homeProduct">
							<img src={all16} alt="" />
						</div>
						<div className="homeProduct">
							<img src={all17} alt="" />
						</div>
						<div className="homeProduct">
							<img src={all18} alt="" />
						</div>
						<div className="homeProduct">
							<img src={all19} alt="" />
						</div>
						<div className="homeProduct">
							<img src={all20} alt="" />
						</div>
						<div className="homeProduct">
							<img src={all21} alt="" />
						</div>
						<div className="homeProduct">
							<img src={all22} alt="" />
						</div>
						<div className="homeProduct">
							<img src={all23} alt="" />
						</div>
						<div className="homeProduct">
							<img src={all24} alt="" />
						</div>
					</div>
				</div>
				<div
					className="tab-pane fade blendedTab"
					id="blended-tab-pane"
					role="tabpanel"
					aria-labelledby="profile-tab"
					tabIndex={0}
				>
					<div className="productsHome">
						<div className="homeProduct">
							<img src={require("../media/blended/1.webp")} alt="" />
						</div>
						<div className="homeProduct">
							<img src={require("../media/blended/2.webp")} alt="" />
						</div>
						<div className="homeProduct">
							<img src={require("../media/blended/3.webp")} alt="" />
						</div>
						<div className="homeProduct">
							<img src={require("../media/blended/4.webp")} alt="" />
						</div>
						<div className="homeProduct">
							<img src={require("../media/blended/5.webp")} alt="" />
						</div>
						<div className="homeProduct">
							<img src={require("../media/blended/6.webp")} alt="" />
						</div>
						<div className="homeProduct">
							<img src={require("../media/blended/7.webp")} alt="" />
						</div>
						<div className="homeProduct">
							<img src={require("../media/blended/8.webp")} alt="" />
						</div>
						<div className="homeProduct">
							<img src={require("../media/blended/9.webp")} alt="" />
						</div>
						<div className="homeProduct">
							<img src={require("../media/blended/10.webp")} alt="" />
						</div>
						<div className="homeProduct">
							<img src={require("../media/blended/11.webp")} alt="" />
						</div>
						<div className="homeProduct">
							<img src={require("../media/blended/12.webp")} alt="" />
						</div>
						<div className="homeProduct">
							<img src={require("../media/blended/13.webp")} alt="" />
						</div>
						<div className="homeProduct">
							<img src={require("../media/blended/14.webp")} alt="" />
						</div>
						<div className="homeProduct">
							<img src={require("../media/blended/15.webp")} alt="" />
						</div>
						<div className="homeProduct">
							<img src={require("../media/blended/16.webp")} alt="" />
						</div>
					</div>
				</div>
				<div
					className="tab-pane fade groundedTab"
					id="grounded-tab-pane"
					role="tabpanel"
					aria-labelledby="contact-tab"
					tabIndex={0}
				>
					<div className="productsHome">
						<div className="homeProduct">
							<img src={require("../media/grounded/1.webp")} alt="" />
						</div>
						<div className="homeProduct">
							<img src={require("../media/grounded/2.webp")} alt="" />
						</div>
						<div className="homeProduct">
							<img src={require("../media/grounded/3.webp")} alt="" />
						</div>
						<div className="homeProduct">
							<img src={require("../media/grounded/4.webp")} alt="" />
						</div>
						<div className="homeProduct">
							<img src={require("../media/grounded/5.webp")} alt="" />
						</div>
						<div className="homeProduct">
							<img src={require("../media/grounded/6.webp")} alt="" />
						</div>
					</div>
				</div>
				<div
					className="tab-pane fade otherTab"
					id="other-tab-pane"
					role="tabpanel"
					aria-labelledby="other-tab"
					tabIndex={0}
				>
					<div className="productsHome">
						<div className="homeProduct">
							<img src={require("../media/other/1.webp")} alt="" />
						</div>
						<div className="homeProduct">
							<img src={require("../media/other/2.webp")} alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}