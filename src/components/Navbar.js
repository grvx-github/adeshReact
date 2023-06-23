import React from "react";
import { useState } from "react";
import logo from '../media/logo.webp'


export const Navbar = () => {
	const [activelink, setActivelink] = useState('home');
	const onUpdateActiveLink = (value) =>{
		setActivelink(value);
	}

	return (
		<div className="heroSection">
			<div className="navSection">
				<nav className="navbar navbar-expand-lg bg-black">
					<div className="container-fluid">
						<a className="navbar-brand" href="#">
							<img src={logo} alt="" />
						</a>
						<button
							className="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="navbar-toggler-icon" />
						</button>
						<div
							className="collapse navbar-collapse ms-auto"
							id="navbarSupportedContent"
						>
							<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
								<li className="nav-item">
									<a className={activelink === 'home' ? 'nav-link active' : 'nav-link'} onClick={() => { onUpdateActiveLink('home') }}>
										Home
									</a>
								</li>
								<li className="nav-item">
									<a className={activelink === 'about' ? 'nav-link active' : 'nav-link'} onClick={() => { onUpdateActiveLink('about') }}>
										About
									</a>
								</li>
								<li className="nav-item">
									<a className={activelink === 'products' ? 'nav-link active' : 'nav-link'} onClick={() => { onUpdateActiveLink('products') }}>
										Products
									</a>
								</li>
								<li className="nav-item">
									<a className={activelink === 'gallery' ? 'nav-link active' : 'nav-link'} onClick={() => { onUpdateActiveLink('gallery') }}>
										Gallery
									</a>
								</li>
								<li className="nav-item">
									<a className={activelink === 'recipes' ? 'nav-link active' : 'nav-link'} onClick={() => { onUpdateActiveLink('recipes') }}>
										Recipes
									</a>
								</li>
								<li className="nav-item">
									<a className={activelink === 'contact' ? 'nav-link active' : 'nav-link'} onClick={() => { onUpdateActiveLink('contact') }}>
										Contact
									</a>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>

		</div>

	)
}