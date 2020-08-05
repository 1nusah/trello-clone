import React from 'react';
import TrelloCard from './TrelloCard';

const TrelloList = ({ title }) => {
	return (
		<div style={styles.container}>
			<h3>{title}</h3>
			<TrelloCard />
		</div>
	);
};
const styles = {
	container: {
		backgroundColor: '#ccc',
		borderRadius: 3,
		width: '22vw',
	},
};
export default TrelloList;
