import { CONSTANTS } from './index';
export const addList = (title) => {
	return {
		type: CONSTANTS.ADD_CARD,
		payload: title,
	};
};
