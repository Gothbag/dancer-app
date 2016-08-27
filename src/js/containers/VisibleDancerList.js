import { connect } from "react-redux";
import { increaseMoves, decreaseMoves, removeDancer } from '../actions';
import DancerList from "../components/DancerList";

// const getVisibleDancers = (dancers, filter) => {
	// switch (filter) {
		// case "SHOW_ALL":
			// return dancers;
			// break;
		// case "SHOW_SAME_MOVES":
			// return dancers.filter(d => d.moves === filter.moves)
			// break;
		// case "SHOW_MORE_MOVES":
			// return dancers.filter(d => d.moves > filter.moves)
			// break;
		// case "SHOW_FEWER_MOVES":
			// return dancers.filter(d => d.moves < filter.moves)
			// break;
	// }
// }

const mapStateToProps = (state) => {
	return {
		dancers: state.dancers
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onIncreaseMovesClick: (id) => {
			dispatch(increaseMoves(id));
		},
		onDecreaseMovesClick: (id) => {
			dispatch(decreaseMoves(id));
		},
		onRemoveClick: (id) => {
			dispatch(removeDancer(id));
		}
	};
};

const VisibleDancerList = connect(
	mapStateToProps,
	mapDispatchToProps
)(DancerList);

export default VisibleDancerList;