
import { combineReducers } from 'redux';
import {  SEARCH_ENTITY } from './actions';

const initialState = {
    items: [],
    history: [],
    search: 'qwrqw'
};

const listing = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_ENTITY:
            return { 
                ...state, 
                items: [...state.items, ...action.item]
            };
        default:
            return state;
    }
}

export default CombinedReducers = combineReducers({
    listing
});