import React, { Component } from 'react';
import { connect } from 'react-redux';
import TrelloList from './TrelloList';
import TrelloActionButton from './trelloActionButton';
class App extends Component {
	render() {
		const { lists } = this.props;
		return (
			<div style={styles.page}>
				<h2>Trello Clone</h2>
				<div style={styles.listContainer}>
					{lists.map((list) => (
						<TrelloList key={list.id} title={list.title} cards={list.cards} />
					))}
					<TrelloActionButton list />
				</div>
			</div>
		);
	}
}
const styles = {
	listContainer: {
		display: 'flex',
		flexDirection: 'row',
		marginRight: 8,
	},
	page: {
		overflow: 'hidden',
		backgrouundColor: 'white',
	},
};
const mapStateToProps = (state) => ({
	lists: state.lists,
});

export default connect(mapStateToProps)(App);
