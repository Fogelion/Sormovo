import React, { Component } from 'react';
import Article from "./Article";

export default function ArticleList(_ref) {
	var articleList = _ref.articleList;

	console.log('ART_AL: ', articleList);
	var articleListElems = articleList.map(function (elem) {
		return React.createElement(
			'li',
			{ key: elem.id },
			React.createElement(Article, { article: elem })
		);
	});
	return React.createElement(
		'ul',
		null,
		articleListElems
	);
}