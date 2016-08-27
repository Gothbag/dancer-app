import React, { PropTypes } from "react";

const Dancer = ({ onIncreaseMoves, onDecreaseMoves, onRemove, name, moves }) => (
	<li>
		{name}. Moves: {moves} <button onClick={onIncreaseMoves}>+</button><button onClick={onDecreaseMoves}>-</button> <button onClick={onRemove}>X</button>
	</li>
);

Dancer.propTypes = {
	onIncreaseMoves: PropTypes.func.isRequired,
	onDecreaseMoves: PropTypes.func.isRequired,
	onRemove: PropTypes.func.isRequired,
	name: PropTypes.string.isRequired,
	moves: PropTypes.number.isRequired
}

export default Dancer;