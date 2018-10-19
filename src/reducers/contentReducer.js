
const stateInit = {
	nav: {
		navSelected: ''
	},
	text: 'start-text'
};

const contentReducer = (state = stateInit, action) => {
	let sendState = {...state};
	console.log(sendState);
	sendState.nav.navSelected = action.navId;
	switch (action.type) {
		case 'TOGGLE':
			return (
				sendState);
		default:
			return state;
	}
};
export default contentReducer;