let nextDancerId = 0;
export const addDancer = (name) => {
	return {
		type: "ADD_DANCER",
		id: nextDancerId++,
		name
	};
};

export const removeDancer = (id) => {
	return {
		type: 'REMOVE_DANCER',
		id
	};
};

export const increaseMoves = (id) => {
	return {
		type: 'INCREASE_MOVES',
		id
	}
};

export const decreaseMoves = (id) => {
	return {
		type: 'DECREASE_MOVES',
		id
	}
};

export const setVisibiltyFilter = (filter) => {
	return {
		type: 'SET_VISIBILITY_FILTER',
		filter
	};
};

export const setNumberMoves = (numberMoves) => {
	return {
		type: 'SET_NUMBER_MOVES',
		numberMoves
	};
};