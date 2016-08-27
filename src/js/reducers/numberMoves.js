const numberMoves = (
	state = 0,
	action
) => {
	switch (action.type) {
		case 'SET_NUMBER_MOVES':
			return action.numberMoves;
			break;
		default:
			return state;
	}
};

export default numberMoves;