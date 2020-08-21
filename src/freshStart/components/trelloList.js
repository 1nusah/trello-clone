import React from 'react';
import TrelloCard from './trelloCard';
import TrelloActionButton from './trelloActionButton';
import { connect } from 'react-redux';
// import { addList } from '../actions';

const TrelloList = ({ title, cards }) => {
	return (
		<div style={styles.container}>
			<h2 style={styles.title}>{title} </h2>
			{cards.map((cards) => {
				return <TrelloCard text={cards.text} key={cards.id} />;
			})}
			<div>
				<TrelloActionButton />
			</div>
		</div>
	);
};
const styles = {
	container: {
		backgroundColor: '#dfe3e6',
		borderRadius: 3,
		width: '15%',
		padding: 10,
		marginRight: 10,
		height: '100%',
	},
	title: {
		textAlign: 'center',
	},
};

export default connect()(TrelloList);
