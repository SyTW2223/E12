import { ActionReducerMap } from "@ngrx/store";
import { BasketStateInterface, FootballStateInterface, SportStateIterface } from "../core/models/sport.state";
import { UserStateInterface } from "../core/models/user.state";
import { basketReducer, footballReducer, sportReducer } from "./reducers/sport.reducer";
import { userReducer } from "./reducers/user.reducers";

export interface AppState {
    userData: UserStateInterface
    sportData: SportStateIterface
    footballData: FootballStateInterface
    basketData: BasketStateInterface
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    userData: userReducer,
    sportData: sportReducer,
    footballData: footballReducer,
    basketData: basketReducer
}