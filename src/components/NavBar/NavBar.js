import React, { Component } from 'react';
import './NavBar.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass, faFeather, faBuilding, faTrophy, faUser, faGavel, faChurch, faGraduationCap, faCameraRetro, faPen } from '@fortawesome/free-solid-svg-icons';

library.add( faCompass, faFeather, faBuilding, faTrophy, faUser, faGavel, faChurch, faGraduationCap, faCameraRetro, faPen );
// console.log("--",library);

export default function NavBar({ navPoints }) {
	const navList = navPoints.map(elem =>
	<a href="#" key={elem.id}><FontAwesomeIcon icon={elem.icon} />{elem.name}</a>
	);
	return (
		<nav className='NavBlock'>
			<ul>
				{navList}
			</ul>
		</nav>
	);
}

