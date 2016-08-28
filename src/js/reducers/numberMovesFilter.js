const numberMovesFilter = (
	state = {
		condition: "SHOW_ALL",
		number: 0
	},
	action
) => {
	switch (action.type) {
		case 'SET_NUMBERMOVES_FILTER_CONDITION':
            return {
              ...state,
              condition: action.condition
            };
			break;
		case 'SET_NUMBERMOVES_FILTER_NUMBER':
			return {
              ...state,
              number: action.number
            };
			break;
		default:
			return state;
	}
}

export default numberMovesFilter;
