import React from 'react';
import TrelloCard from './TrelloCard';
import TrelloActionButton from './trelloActionButton';

const TrelloList = ({ title, cards, listId }) => {
	return (
		<div style={styles.container}>
			<h3>{title}</h3>
			{cards.map((card) => (
				<TrelloCard key={card.id} text={card.text} />
			))}

			<div>
				<TrelloActionButton listId={listId} />
			</div>
		</div>
	);
};
const styles = {
	container: {
		backgroundColor: '#dfe3e6',
		borderRadius: 3,
		width: '18vw',
		padding: 8,
		marginRight: 8,
		height: '100%',
	},
};
export default TrelloList;
