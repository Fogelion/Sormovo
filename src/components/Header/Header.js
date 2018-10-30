import React from 'react';
import './Header.css';
import {Link} from "react-router-dom";


export default function Header() {

	return (
		<header className="Header">
			<div className="headerLogo">
				<Link to="/"><img src={require("../../images/headerCrest.png")} alt="logo" id="headerLogo"/></Link>
			</div>
			<div className="HeaderTit">
				<Link to="/"><h1 className="HeaderName">СОРМОВО.РФ</h1></Link>
			</div>
		</header>
	);
}

