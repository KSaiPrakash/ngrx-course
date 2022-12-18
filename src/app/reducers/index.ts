import { routerReducer } from '@ngrx/router-store';
import {
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer,
    State
  } from '@ngrx/store';
  import { environment } from '../../environments/environment';
  
  export const authFeatureKey = 'auth';
  
  export interface AppState {
  
  }
  
  export const reducers: ActionReducerMap<AppState> = {
    router: routerReducer
  };

  export function logger(reducer: ActionReducer<any>)
  : ActionReducer<any> {
    return (state, action) => {
      return reducer(state, action);
    }
  }
  
  export const metaReducers: MetaReducer<AppState>[] = 
    !environment.production ? [logger] : [];
  