import { combineReducers } from "redux";
import quoteOverview from "./quoteOverview";
import ratingInformation from "./ratingInformation";

export default combineReducers({ quoteOverview, ratingInformation });
