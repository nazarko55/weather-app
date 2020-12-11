import searchReducer from '../components/SearchBar/searchReducer';
import weatherDisplay from '../components/weatherDisplay/displayReducer'
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  searchReducer,
  weatherDisplay

})

export default rootReducer;