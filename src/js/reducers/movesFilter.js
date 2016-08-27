const numberMovesFilter = (
	state = {
		visibilityFilter: "SHOW_ALL",
		number: 0
	},
	action
) => {
	switch (action.type) {
		case 'SET_VISIBILITY_MOVES':
		case 'SET_MOVES_NUMBER':
			return action.filter;
			break;
		default:
			return state;
	}
}

export default numberMovesFilter;