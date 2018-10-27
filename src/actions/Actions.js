import * as constants from "../constants/Constants";

export const toggleNav = (navInfo) => {
	return {
		type: constants.TOOGLE,
		navInfo
	}
};
export const checkHistory = (history) => {
	return {
		type: constants.HISTORY,
		history
	}
};