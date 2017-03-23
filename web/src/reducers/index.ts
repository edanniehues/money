import {loading} from "./loadingReducer";
import {user, token} from "@edanniehues/devise-token-auth-redux/reducers";
import {flash} from "./flashReducer";
import {combineReducers, Reducer} from "redux";
import {IState} from "../models";

const rootReducer: Reducer<IState> = combineReducers<IState>({
    loading,

    token,
    user,

    flash
});

export default rootReducer;
