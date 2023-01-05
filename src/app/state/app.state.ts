import { ActionReducerMap } from "@ngrx/store";
import { SportStateIterface } from "../core/models/sport.state";
import { UserStateInterface } from "../core/models/user.state";
import { sportReducer } from "./reducers/sport.reducer";
import { userReducer } from "./reducers/user.reducers";

export interface AppState {
    userData: UserStateInterface
    sportData: SportStateIterface
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    userData: userReducer,
    sportData: sportReducer
}