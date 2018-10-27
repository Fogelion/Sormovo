import React, {Component} from 'react';
import { connect } from 'react-redux';
import './NavBar.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCompass, faFeather, faBuilding, faTrophy, faUser, faGavel, faChurch, faGraduationCap, faCameraRetro, faPen } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import * as actions from "../../actions/Actions";


import createHistory from 'history/createBrowserHistory';




library.add( faHome, faCompass, faFeather, faBuilding, faTrophy, faUser, faGavel, faChurch, faGraduationCap, faCameraRetro, faPen );

class NavBar extends Component {
	NavClick = (event) => {
		let toStore = {
			navSelected: event.currentTarget.id,
			navPath: createHistory().location.pathname
		};
		this.props.onNavClick(toStore);
	};
	render() {

		let navMenu = this.props.navPoints.filter(elem => elem.forNavBar);
		const navList = navMenu.map((elem) => {
			let navClass = (this.props.store.status.nav.navPath === elem.route) ? 'navActive navLink' : 'navLink';
			return <li
				key={elem.id}
				id={elem.id}
				onClick={this.NavClick}
			>
				{/*<Link to={elem.route} className='navLink'>*/}
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
					<Link to='/404' className='navLink'>
						<span>error 404</span>
					</Link>
				</ul>
			</nav>
		);
	}

}

const mapStateToProps = (state) => {
	return {
		store: state
	}
};
const mapDispatchToProps = (dispatch) => {
	return {
		onNavClick: (navInfo) => {
			dispatch(actions.toggleNav(navInfo))
		}
	}
};
// const NavBar = connect(mapStateToProps, mapDispatchToProps)(NavBarList);
// export default NavBar;
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
