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

export const setNumberFilterCondition = (condition) => {
	return {
		type: 'SET_NUMBERMOVES_FILTER_CONDITION',
		condition
	};
};

export const setFilterNumberMoves = (number) => {
	return {
		type: 'SET_NUMBERMOVES_FILTER_NUMBER',
		number
	};
};
