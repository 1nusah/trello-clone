const initialState = [
	{
		title: 'Last episode',
		id: 0,
		cards: [
			{
				id: 0,
				text: 'we created a static list and card',
			},
			{
				id: 1,
				text: 'we used a mix between material ui react and styled components',
			},
			{
				id: 2,
				text: 'hey there squad',
			},
		],
	},
];
const listsReducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};
export default listsReducer;
