import React from 'react';
import './Header.css';
import {Link} from "react-router-dom";


export default function Header() {

	return (
		<header className="Header">
			<div className="headerLogo">
				<Link to="/"><img src={require("../../image/headerCrest.png")} alt="logo" id="headerLogo"/></Link>
			</div>
			<div className="HeaderTit"><h1 className="HeaderName">СОРМОВО.РФ</h1></div>
		</header>
	);
}

