import { createSlice } from "@reduxjs/toolkit";
import { store } from "../store";

const initialState = {
    userName: '',
    search: ''
}

const gitHubActionSlice = createSlice({
    name: 'GitHubActions',
    initialState,
    reducers: {
        updateUserName(state, action) {
            return {
                ...state,
                userName:action.payload.userName
            }
        }
    }
});

export const {updateUserName} = gitHubActionSlice.actions;
export const getUserName = () => store.getState().GitHubActions.userName;
export const getSearchAction = () => store.getState().GitHubActions.search;

export default gitHubActionSlice.reducer;