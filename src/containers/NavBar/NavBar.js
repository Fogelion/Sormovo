import React, {Component} from 'react';
import { connect } from 'react-redux';
import './NavBar.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCompass, faFeather, faBuilding, faTrophy, faUser, faGavel, faChurch, faGraduationCap, faCameraRetro, faPen } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


import createHistory from 'history/createBrowserHistory';




library.add( faHome, faCompass, faFeather, faBuilding, faTrophy, faUser, faGavel, faChurch, faGraduationCap, faCameraRetro, faPen );

class NavBarList extends Component {
	NavClick = (event) => {
		// console.log(createHistory().location.pathname);
		this.props.onNavClick(event.currentTarget.id);
	};
	render() {
		let navMenu = this.props.navPoints.filter(elem => elem.forNavBar);
		const navList = navMenu.map((elem) => {
			let navClass = (createHistory().location.pathname === elem.route) ? 'navActive navLink' : 'navLink';
			return <li
				key={elem.id}
				id={elem.id}
				onClick={this.NavClick}
			>
				<Link to={elem.route} className={navClass}>
					<FontAwesomeIcon icon={elem.icon}/>
					<span>{elem.name}</span>
				</Link>
			</li>
		});
		return (
			<nav className='NavBlock'>
				<ul>
					{navList}
					<Link to='/nonono/404' className='navLink'>
						error 404
					</Link>
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

