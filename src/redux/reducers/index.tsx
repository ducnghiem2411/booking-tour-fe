import { combineReducers } from "redux";
import homeReducer from "./homeReducer";
import loginReduder from "./loginReduder";
import registerReducer from "./registerReducer";
import displayModalReducer from "./displayModalReducer";
import countryReducer from "./countryReducer";

const rootReducers = combineReducers({
  login: loginReduder,
  home: homeReducer,
  register: registerReducer,
  displayModal: displayModalReducer,
  country: countryReducer
});

export default rootReducers;
