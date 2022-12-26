import { ActionReducerMap } from "@ngrx/store";
import { SportStateIterface } from "../core/models/sport.state";
import { UserStateInterface } from "../core/models/user.state";
import { sportReducer } from "./reducers/sport.reducer";
import { userReducer } from "./reducers/user.reducers";

export interface AppState {
    user: UserStateInterface
    sport: SportStateIterface
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    user: userReducer,
    sport: sportReducer
}