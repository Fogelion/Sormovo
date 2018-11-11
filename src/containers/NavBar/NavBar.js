import React, {Component} from 'react';
import { connect } from 'react-redux';
import './NavBar.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCompass, faFeather, faBuilding, faTrophy, faUser, faGavel, faChurch, faGraduationCap, faCameraRetro, faPen, faBook, faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import * as actions from "../../actions/Actions";
import createHistory from 'history/createBrowserHistory';
library.add( faHome, faCompass, faFeather, faBuilding, faTrophy, faUser, faGavel, faChurch, faGraduationCap, faCameraRetro, faPen, faBook, faPaperclip );




class NavBar extends Component {
	componentDidMount () {
		this.locateNav();
	}
	componentDidUpdate () {
		this.locateNav();
	}
	NavClick = () => {
		// this.locateNav();
	};
	locateNav = () => {
		let NavToStore = this.props.store.status.nav;
		let route = '/' + createHistory().location.pathname.split('/')[1];
		let navOn = this.props.navPoints.find(p => p.route === route);
		if ((NavToStore.navSelected.route !== route) && (typeof navOn !== 'undefined')) {
			this.props.store.status.is404 = false;
			NavToStore.navPath = route;
			NavToStore.navSelected.id = navOn.id;
			NavToStore.navSelected.forNavBar = navOn.forNavBar;
			NavToStore.navSelected.name = navOn.name;
			NavToStore.navSelected.route = navOn.route;
			this.props.toStore(NavToStore);
		}
	};
	render() {
		// if (this.props.store.status.nav.navPath !== createHistory().location.pathname) this.locateNav();
		// this.locateNav();
		let navMenu = this.props.navPoints.filter(elem => elem.forNavBar);
		const navList = navMenu.map((elem) => {
			let navClass = (this.props.store.status.nav.navPath === elem.route) ? 'navActive navLink' : 'navLink';
			return <li
				key={elem.id}
				id={elem.id}
				onClick={this.NavClick}
			>
				<Link to={elem.route} className={navClass}>
					<div className="navIcon"><FontAwesomeIcon icon={elem.icon}/></div>
					<div className="navName">{elem.name}</div>
				</Link>
			</li>
		});
		return (
			<nav className='NavBlock'>
				<ul>
					{navList}
					<Link to='/404' className='navLink'>
						<div className="navIcon"></div>
						<div className="navName">error 404</div>
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
		toStore: (navInfo) => {
			dispatch(actions.toggleNav(navInfo))
		}
	}
};
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
