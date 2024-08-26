import { combineReducers, configureStore } from "@reduxjs/toolkit";
import githubActionReducer from "./features/github-actions";
import { githubApi } from "./services/github";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer: combineReducers({
        'GitHubActions':githubActionReducer,
        [githubApi.reducerPath]: githubApi.reducer
    }),
    devTools: true,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(githubApi.middleware)
    }
});


setupListeners(store.dispatch)