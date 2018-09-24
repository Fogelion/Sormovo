var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from 'react';

var Article = function (_Component) {
	_inherits(Article, _Component);

	function Article() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Article);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Article.__proto__ || Object.getPrototypeOf(Article)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			isOpen: true
		}, _this.handleClick = function () {
			_this.setState(function (prevState, props) {
				return {
					isOpen: !prevState.isOpen
				};
			});
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Article, [{
		key: 'render',
		value: function render() {
			var article = this.props.article;

			var body = this.state.isOpen && React.createElement(
				'section',
				null,
				article.text
			);
			var butName = this.state.isOpen ? 'close' : 'open';
			return React.createElement(
				'div',
				null,
				React.createElement(
					'h2',
					null,
					article.title,
					React.createElement(
						'button',
						{ onClick: this.handleClick },
						butName
					)
				),
				body,
				React.createElement(
					'h3',
					null,
					'creation date: ',
					new Date(article.date).toDateString()
				)
			);
		}
	}]);

	return Article;
}(Component);

export default Article;