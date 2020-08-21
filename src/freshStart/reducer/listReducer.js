import { CONSTANTS } from '../actions';
let listID = 2;
let cardID = 4;
const initialState = [
	{
		title: 'tuts',
		id: 0,
		cards: [
			{ id: 0, text: 'first item ' },
			{ id: 1, text: 'this is a youtube video' },
			{
				id: 2,
				text: "but i'm learning shit so wassup",
			},
			{
				id: 3,
				text: 'whiles listening to Burna',
			},
		],
	},
	{
		title: 'khalid',
		id: 1,
		cards: [
			{ id: 0, text: 'Nothing feels better than this' },
			{ id: 1, text: 'Hundred' },
			{ id: 2, text: 'Young Dumb and Broke' },
		],
	},
];
const listReducer = (state = initialState, action) => {
	switch (action.type) {
		case CONSTANTS.ADD_LIST:
			const newList = {
				title: action.payload,
				cards: [],
				id: listID,
			};
			listID += 1;
			return [...state, newList];
		case CONSTANTS.ADD_CARD:
			const newCard = {
				text: action.payload.text,
				id: cardID,
			};
			cardID += 1;
			console.log('action recieved', action);
			const newState = state.map((list) => {
				if (list.id === action.payload.listID) {
					return {
						...list,
						cards: [...list.cards, newCard],
					};
				} else {
					return list;
				}
			});
			return newState;

		default:
			return state;
	}
};

export default listReducer;
