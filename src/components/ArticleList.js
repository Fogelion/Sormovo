import React, { Component } from 'react';
import Article from "./Article";

export default function ArticleList({ articleList }) {
	console.log('ART_AL: ', articleList);
	const articleListElems = articleList.map(elem =>
		<li key={elem.id}><Article article = {elem}/></li>
	);
	return (
		<ul>
			{articleListElems}
		</ul>
	);
}

