import React, { PropTypes } from "react";
import Dancer from "./Dancer";

const DancerList = ({ dancers, onIncreaseMovesClick, onDecreaseMovesClick, onRemoveClick }) => (
	<ul>
		{dancers.map( dancer => 
			<Dancer
				key={dancer.id}
				{...dancer}
				onIncreaseMoves={() => onIncreaseMovesClick(dancer.id)}
				onDecreaseMoves={() => onDecreaseMovesClick(dancer.id)}
				onRemove={() => onRemoveClick(dancer.id)}
			/>
		)}
	</ul>
);

DancerList.propTypes = {
	dancers: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		moves: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired
	}).isRequired).isRequired,
	onIncreaseMovesClick: PropTypes.func.isRequired,
	onDecreaseMovesClick: PropTypes.func.isRequired,
	onRemoveClick: PropTypes.func.isRequired
};

export default DancerList;