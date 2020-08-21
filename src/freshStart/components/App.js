import React, { Component } from 'react';
import TrelloList from './trelloList';
import { connect } from 'react-redux';
import TrelloActionButton from './trelloActionButton';

class App extends Component {
	render() {
		const { lists } = this.props;

		return (
			<div style={styles.page}>
				<h2>Trello Clone</h2>
				<div style={styles.listContainer}>
					{lists.map((list) => {
						return (
							<TrelloList
								listID={list.id}
								title={list.title}
								cards={list.cards}
								key={list.id}
							/>
						);
					})}
					<div>
						<TrelloActionButton list />
					</div>
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
		padding: 8,
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
