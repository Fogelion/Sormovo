import React, { Component } from 'react';
import './Header.css';


export default function Header() {

	return (
		<header className="Header">
			<div className="headerLogo">
				<a href="../../../public/index.html">
					<img src={require("../../image/headerCrest.png")} alt="logo" id="headerLogo"/>
				</a></div>
			<div className="HeaderTit"><h1 className="HeaderName">СОРМОВО.РФ</h1></div>
				{/*<img src={require("../../image/headerBack.jpg")} alt="2"  className="imgTest"/>*/}
		</header>
	);
}

