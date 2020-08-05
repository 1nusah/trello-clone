const initialState = [
	{
		title: 'Last episode',
		id: 3,
		cards: [
			{
				id: 0,
				text: 'we created a static list and card',
			},
			{
				id: 1,
				text: 'we used a mix between material ui react and styled components',
			},
		],
	},
	{
		title: 'kpodjiemo',
		id: 1,
		cards: [
			{
				id: 0,
				text: 'hello friends',
			},
		],
	},
	{
		title: 'kpodjiemo',
		id: 2,
		cards: [
			{
				id: 0,
				text: 'hello friends',
			},
			{
				id: 1,
				text: 'wassup baby',
			},
			{
				id: 2,
				text: 'yoyoyo',
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
