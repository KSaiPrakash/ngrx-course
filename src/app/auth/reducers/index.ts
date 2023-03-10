import { act } from '@ngrx/effects';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on,
  State
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { AuthActions } from '../action-types';
import { User } from '../model/user.model';

export const authFeatureKey = 'auth';

export interface AuthState {
  user: User
}

export const initialAuthState: AuthState = {
  user: undefined
}

export const authReducer = createReducer(
  initialAuthState,

  on(AuthActions.login, (state, action)=> {
    return {
      user: action.user
    }
  }),

  on(AuthActions.logout, (state, action)=> {
    return {
      user: undefined
    }
  })
);
