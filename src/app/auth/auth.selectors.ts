import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./reducers";

export const selectorAuthState = createFeatureSelector<AuthState>("auth");

// Memoized function
export const isLoggedIn = createSelector(
    selectorAuthState,
    auth => !!auth.user
);

export const isLoggedOut = createSelector(
    isLoggedIn,
    loggedIn => !loggedIn 
);