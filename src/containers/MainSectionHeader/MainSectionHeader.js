import React, {Component} from "react";
import * as actions from "../../actions/Actions";
import {connect} from "react-redux";
import {withRouter, Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {library} from "@fortawesome/fontawesome-svg-core/index";
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import './MainSectionHeader.css';
library.add( faChevronLeft );


class MainSectionHeader extends Component {
	goBack = () => {
		this.props.store.status.myHistory.goBack();
	};
	render() {
		let button;
		let title;
		let icon = <div className='MainBackIconBlock' onClick={this.goBack}>
			<FontAwesomeIcon icon='chevron-left' className='MainBackIcon'/>
		</div>;
		if (!this.props.store.status.is404) {
			button = (this.props.store.status.nav.navSelected.route === this.props.store.status.myHistory.location.pathname)
				? '' : icon;
			title = <h1 className='MainTitleBlock'>
				<Link to={this.props.store.status.nav.navSelected.route} className='MainTitleLink'>
					{this.props.store.status.nav.navSelected.name}</Link>
			</h1>;
		} else {
			title = <h1 className='MainTitleBlock'>
					{this.props.store.status.nav.navSelected.name}
			</h1>;
		}
		return (
			<div className='HeaderMain'>
				{button}
				{title}
			</div>
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
		toStore: (history) => {
			dispatch(actions.checkHistory(history))
		}
	}
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainSectionHeader));