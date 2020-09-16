import {combineReducers} from "redux";
import fetchCarsReducer from "../reducers/CarsReducer";

export default combineReducers({
    cars: fetchCarsReducer
});