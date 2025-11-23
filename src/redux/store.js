import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from "redux-thunk";
import { authReducer } from "./reducer/authReducer";
import { SignReducer, TopSignUsersReducer } from "./reducer/signReducer";
import { savedTextReducer } from "./reducer/savedTextReducer";

const reducer = combineReducers({
    auth: authReducer,
    signData: SignReducer,
    topUsers: TopSignUsersReducer,
    savedTexts: savedTextReducer
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;