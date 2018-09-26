// import Article from './Article';
// import ArticleList from "./ArticleList";
// import articles from '../fixtures';

import React, { Component } from 'react';
import NavBar from './NavBar/NavBar';
import navPoints from './NavBar/navPoints';
import Header from './Header/Header';
import MainSection from './MainSection/MainSection';



import './App.css';

class App extends Component {
	render() {
    return (
      <div className="App">
				<Header />
				<NavBar navPoints = {navPoints}/>
				<MainSection />
				{/*<ArticleList articleList = {articles} />*/}
      </div>
    );
  }
}

export default App
