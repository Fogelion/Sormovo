import React, { Component } from 'react';
import Article from "./Article";
// import articles from "../fixtures";

export default function ArticleList({ articleList }) {
	console.log('ART_AL: ', articleList);
	const articleListElems = articleList.map(elem =>
		<li key={elem.id}><Article article = {elem}/></li>
	);
	return (
		<ul>
			{articleListElems}
			{/*<Article article = {articles[0]} />*/}
			{/*<li><Article article = {articleList[0]} /></li>*/}
			{/*<li><Article article = {articleList[1]} /></li>*/}
			{/*<li><Article article = {articleList[2]} /></li>*/}
		</ul>
	);
}

