import {composeWithDevTools} from "redux-devtools-extension";
import {configureStore} from "@reduxjs/toolkit";
import {tipMessageReducer} from "./feature/default.redux";

//存储状态
export const store = configureStore({
	reducer:{
		tipMsg:tipMessageReducer
	},
	devTools:composeWithDevTools(),
	middleware : (getDefaultMiddleware) => {
		return getDefaultMiddleware({
			serializableCheck: false
		})
	}
});
