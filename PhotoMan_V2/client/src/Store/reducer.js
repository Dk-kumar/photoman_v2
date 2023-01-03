import { combineReducers } from "redux";
import collectionsReducer from "./Collections/Collections.reducer";
import sliderReducer from "./Slider/Slider.reducer";

const Reducers = combineReducers({
  sliderReducer,
  collectionsReducer,
});

export default Reducers;
