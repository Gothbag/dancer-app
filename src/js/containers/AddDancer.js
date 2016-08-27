import React from "react";
import { connect } from "react-redux";
import { addDancer } from "../actions";

let AddDancer = ({ dispatch }) => {
	let input;
	
	return (
		<div>
			<form onSubmit={ e => {
				e.preventDefault();
				if (!input.value.trim()) {
					return;
				}
				dispatch(addDancer(input.value));
				input.value = "";
			}}>
				<input ref={ node => {
					input = node
				}} />
				<button type="submit">
					Add Dancer
				</button>
			</form>
		</div>
	);
}
AddDancer = connect()(AddDancer);

export default AddDancer;