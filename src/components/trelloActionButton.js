import React from 'react';
import Icon from '@material-ui/core/Icon';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import TextArea from 'react-textarea-autosize';
import { connect } from 'react-redux';
import { addList, addCard } from '../actions';
class TrelloActionButton extends React.Component {
	state = {
		formOpen: false,
		text: '',
	};
	renderAddButton = () => {
		const { list } = this.props;
		const buttonText = list ? 'Add another list' : 'Add another card';
		const buttonTextOpacity = list ? 1 : 0.5;
		const buttonTextColor = list ? 'white' : 'inherit';
		const buttonTextBackground = list ? 'rgba(0,0,0,0.15)' : 'inherit';
		return (
			<div
				onClick={this.openForm}
				style={{
					...styles.openForButtonGroup,
					opacity: buttonTextOpacity,
					color: buttonTextColor,
					backgroundColor: buttonTextBackground,
				}}
			>
				<Icon>add</Icon>
				<p>{buttonText}</p>
			</div>
		);
	};
	openForm = () => {
		this.setState({ formOpen: true });
	};
	closeForm = () => {
		this.setState({ formOpen: false });
	};
	handleInputChange = (e) => {
		this.setState({
			text: e.target.value,
		});
	};
	handleAddList = () => {
		const { dispatch, listId } = this.props;
		const text = this.state;

		if (text) {
			dispatch(addList(text, listId));
			return;
		}
	};
	handleAddCard = () => {
		const { dispatch, listId } = this.props;
		const text = this.state;

		if (text) {
			dispatch(addCard(text, listId));
		}
	};
	renderForm = () => {
		const { list } = this.props;
		const placeholder = list
			? 'Enter list title'
			: 'Enter a title for this card...';
		const buttonTitle = list ? 'Add list ' : 'Add Card';
		return (
			<div>
				<Card
					style={{
						minHeight: 80,
						overflow: 'visible',

						padding: ' 6px 8px 2px',
					}}
				>
					<TextArea
						style={{
							resize: 'none',
							width: '100%',
							outline: 'none',
							border: 'none',
							overflow: 'hidden',
						}}
						placeholder={placeholder}
						autoFocus
						value={this.state.text}
						onBlur={this.closeForm}
						onChange={this.handleInputChange}
					/>
				</Card>
				<div style={styles.formButtonGroup}>
					<Button
						onMouseDown={list ? this.handleAddList : this.handleAddCard}
						variant="contained"
						style={{ color: 'white', backgroundColor: '#5aac44' }}
					>
						{buttonTitle}
					</Button>
					<Icon
						style={{ marginLeft: 0, cursor: 'pointer' }}
						onClick={this.closeForm}
					>
						close
					</Icon>
				</div>
			</div>
		);
	};
	render() {
		return this.state.formOpen ? this.renderForm() : this.renderAddButton();
	}
}
const styles = {
	openForButtonGroup: {
		display: 'flex',
		alignItems: 'center',
		textAlign: 'center',
		cursor: 'pointer',
		borderRadius: 3,
		height: 36,
	},
	formButtonGroup: {
		marginTop: 8,
		display: 'flex',
		alignItems: 'center',
	},
};
export default connect()(TrelloActionButton);
