import React, {Component} from 'react';
import { connect } from 'react-redux';
import './NavBar.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass, faFeather, faBuilding, faTrophy, faUser, faGavel, faChurch, faGraduationCap, faCameraRetro, faPen } from '@fortawesome/free-solid-svg-icons';
// import navPoints from "./navPoints";

library.add( faCompass, faFeather, faBuilding, faTrophy, faUser, faGavel, faChurch, faGraduationCap, faCameraRetro, faPen );




function NavBarList1({ navPoints }) {
	const NavClick = (event) => {
		console.dir(event.target);
		console.log(event.target.id + ' = ' + event.target.innerText);
		// () => onNavClick(event.target.id);
	};
	const navList = navPoints.map(elem =>
	<a
		href="#"
		key={elem.id}
		id={elem.id}
		onClick={NavClick}
	>
		<FontAwesomeIcon icon={elem.icon} />
		{elem.name}</a>
	);
	return (
		<nav className='NavBlock'>
			<ul>
				{navList}
			</ul>
		</nav>
	);
	// NavClick = (event) => {
	// 	this.props.onNavClick(event.target);
	// };
}



class NavBarList extends Component {
	// state = {
	// 	isOpen: true
	// };

	NavClick = (event) => {
		console.dir(event.target);
		console.log(event.target.id + ' = ' + event.target.innerText);
		this.props.onNavClick(event.target.id);
	};
	render() {
		console.log(this.props);
		const navList = this.props.navPoints.map(elem =>
			<a
				href="#"
				key={elem.id}
				id={elem.id}
				onClick={this.NavClick}
			>
				<FontAwesomeIcon icon={elem.icon} />
				{elem.name}</a>
		);
		return (
			<nav className='NavBlock'>
				<ul>
					{navList}
				</ul>
			</nav>
		);
	}

}

const toggleNav = (navId) => {
	return {
		type: 'TOGGLE',
		navId
	}
};


const mapStateToProps = (state) => {
	return {
		navActive: state
	}
};
const mapDispatchToProps = (dispatch) => {
	return {
		onNavClick: (navId) => {
			dispatch(toggleNav(navId))
		}
	}
};




const NavBar = connect(mapStateToProps, mapDispatchToProps)(NavBarList);
export default NavBar;

