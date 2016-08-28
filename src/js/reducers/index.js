import { combineReducers } from "redux";
import dancers from "./dancers";
import numberMovesFilter from "./numberMovesFilter";

//we can omit the value thanks to the ES6 shorthand notation since the key is named like the variable
const dancerApp = combineReducers({
	dancers
	numberMovesFilter
});

export default dancerApp;
