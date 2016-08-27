const dancer = (state = [], action) => {
	switch (action.type) {
		case "ADD_DANCER":
			return {
				id: action.id,
				name: action.name,
				moves: 0
			};
			break;
		case "REMOVE_DANCER":
			return state.id !== action.id;
			break;
		case "INCREASE_MOVES":
			if (state.id !== action.id) {
				return state;
			}
			return Object.assign({}, state, {
				moves: state.moves + 1
			});
			break;
		case "DECREASE_MOVES":
			if (state.id !== action.id) {
				return state;
			}
			return Object.assign({}, state, {
				moves: state.moves - 1
			});
			break;
		default:
			return state;
	}
}

const dancers = (state = [], action) => {
	switch (action.type) {
		case 'ADD_DANCER':
			return [ //we're simply concatenating the state array and the new dancer
				...state,
				dancer(undefined, action)
			]
			break;
		case 'REMOVE_DANCER':
			return state.filter(d =>
				dancer(d, action)
			)
			break;
		case 'INCREASE_MOVES':
		case "DECREASE_MOVES":
			return state.map(d => 
				dancer(d, action)
			)
			break;
		default:
			return state;
	}
}

export default dancers;