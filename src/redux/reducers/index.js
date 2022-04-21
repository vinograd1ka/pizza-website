import {combineReducers} from 'redux';


import filtersReducer from "./filters-reducer";
import pizzasReducer from "./pizzas-reducer";

const rootReducer = combineReducers({
    filtersReducer,
    pizzasReducer
})

export default rootReducer;
