import React, { Component } from 'react';
import Article from './Article';
import ArticleList from "./ArticleList";
import articles from '../fixtures'


class App extends Component {
	render() {
		// console.log('ART_APP: ', articles);
    return (
      <div className="App">
				<h1>This App:</h1>
				{/*<Article article = {articles[0]} />*/}
				{/*<Article article = {articles[1]} />*/}
				<ArticleList articleList = {articles} />
      </div>
    );
  }
}

export default App
