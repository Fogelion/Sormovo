import React, { Component } from 'react';
import './Header.css';


export default function Header() {

	return (
		<header className="Header">
			{/*<div className="headerLogo">*/}
				{/*<a href="../../../public/index.html"><img src={require("../../image/adeptus_mechanicus.png")} alt="logo" id="headerLogo"/></a></div>*/}
			{/*<div className="HeaderTit"><h1 className="HeaderName">Адептус Сормус</h1></div>*/}
				<img src={require("../../image/URA_URA12.jpg")} alt="2"  className="imgTest"/>
		</header>
	);
}

