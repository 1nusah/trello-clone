import { CONSTANTS } from './index';
export const addCard = (text, listID) => {
	return {
		type: CONSTANTS.ADD_CARD,
		payload: { text, listID },
	};
};
