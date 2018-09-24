import React, { Component } from 'react';
import Article from './Article';
import ArticleList from "./ArticleList";
import articles from '../fixtures'


class App extends Component {
	render() {
    return (
      <div className="App">
				<h1>This App:</h1>
				<ArticleList articleList = {articles} />
      </div>
    );
  }
}

export default App
