import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import navPoints from '../NavBar/navPoints';
import Header from '../../components/Header/Header';
import MainSection from '../MainSection/MainSection';
import './App.css';

export default class App extends Component {
	render() {
    return (
				<div className="App">
					<Header />
					<NavBar navPoints = {navPoints}/>
					<MainSection navPoints = {navPoints}/>
				</div>
    );
  }
}
