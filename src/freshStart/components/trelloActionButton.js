import React, { Component, useDispatch } from 'react';
import Icon from '@material-ui/icons/Add';
import Cancel from '@material-ui/icons/Cancel';
import Card from '@material-ui/core/Card';
import TextArea from 'react-textarea-autosize';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { addList, addCard } from '../actions/';
export class TrelloActionButton extends Component {
	state = { openForm: false, text: '' };

	closeForm = () => {
		this.setState({ openForm: false });
	};
	openForm = () => {
		this.setState({ openForm: true });
	};
	handleAddlist = () => {
		const { dispatch } = this.props;
		const { text } = this.state;
		if (text) {
			dispatch(addList(text));
			this.setState({ text: '' });
		}
		return;
	};
	handleInputChange = (e) => {
		this.setState({ text: e.target.value });
	};
	handleAddCard = () => {
		const { text } = this.state;
		const { dispatch, listID } = this.props;
		if (text) {
			dispatch(addCard(text, listID));
			this.setState({ text: '' });
		}
	};
	renderAddButton = () => {
		const { list } = this.props;
		const buttonText = list ? 'Add another list' : 'Add another card';
		const buttonOpacity = list ? 1 : 0.5;
		const buttonTextColor = list ? 'white' : 'inherit';
		const buttonTextBackground = list ? 'rgba(0, 0, 0, 0.15)' : 'inherit';
		return (
			<div
				style={{
					...styles.openFormButtonGroup,
					color: buttonTextColor,
					opacity: buttonOpacity,
					backgroundColor: buttonTextBackground,
				}}
				onClick={() => this.openForm()}
			>
				<Icon>add</Icon>
				<p>{buttonText}</p>
			</div>
		);
	};
	renderForm = () => {
		const { list } = this.props;
		const placeholderText = list ? 'Enter list title' : 'Enter card deets';
		const buttonText = list ? 'Add List ' : 'Add Card';
		// const buttonOpacity = list ? 1 : 0.5;
		// const buttonTextColor = list ? 'white' : 'inherit';
		// const buttonTextBackground = list ? 'rgba(0, 0, 0, 0.15)' : 'inherit';

		return (
			<div>
				<Card
					style={{
						overflow: 'hidden',
						minHeight: 80,
						minWidth: '15%',
						padding: '6px 8px 2px',
					}}
				>
					<TextArea
						placeholder={placeholderText}
						autoFocus
						style={{
							width: '100%',
							resize: 'none',
							height: '40%',
							alignItems: 'center',
							outline: 'none',
							border: 'none',
						}}
						onBlur={() => this.closeForm()}
						value={this.state.text}
						onChange={this.handleInputChange}
					/>
				</Card>
				<div style={styles.openFormButtonGroup}>
					<Button
						onMouseDown={list ? this.handleAddlist : this.handleAddCard}
						variant="contained"
						style={{
							color: 'white',
							backgroundColor: '#5aac44',
						}}
					>
						{buttonText}
					</Button>
					<Cancel style={{ marginLeft: 0, cursor: 'pointer' }} />
				</div>
			</div>
		);
	};
	render() {
		return this.state.openForm ? this.renderForm() : this.renderAddButton();
	}
}
const styles = {
	buttonContainer: {
		flexDirection: 'row',
		display: 'flex',
	},
	openFormButtonGroup: {
		display: 'flex',
		alignItems: 'center',
		cursor: 'pointer',
		borderRadius: 3,
		height: 36,
		paddingLeft: 10,
		marginTop: 8,
	},
};
export default connect()(TrelloActionButton);
