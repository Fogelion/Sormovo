import React, {Component} from 'react';
import { connect } from 'react-redux';
import './NavBar.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass, faFeather, faBuilding, faTrophy, faUser, faGavel, faChurch, faGraduationCap, faCameraRetro, faPen } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';




library.add( faCompass, faFeather, faBuilding, faTrophy, faUser, faGavel, faChurch, faGraduationCap, faCameraRetro, faPen );

class NavBarList extends Component {
	// state = {
	// 	isOpen: true
	// };

	NavClick = (event) => {
		this.props.onNavClick(event.currentTarget.id);
	};
	render() {
		const navList = this.props.navPoints.map((elem) => {
			return <li
				key={elem.id}
				id={elem.id}
				onClick={this.NavClick}
			>
				<Link to={'/' + elem.route}>
					<FontAwesomeIcon icon={elem.icon}/>
					{elem.name}
				</Link>
			</li>
		});
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

