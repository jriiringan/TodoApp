
import { combineReducers } from 'redux';
import {  SEARCH_ENTITY, ADD_BOOKMARK } from './actions';

const initialState = {
    items: [],
    history: [],
    bookmarks: [],
    search: ''
};

const listing = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_ENTITY:
            return { 
                ...state, 
                items: [...state.items, ...action.item]
            };
        case ADD_BOOKMARK:
                return { 
                    ...state, 
                    items: [...state.bookmarks, ...action.item]
                };
        default:
            return state;
    }
}

export default CombinedReducers = combineReducers({
    listing
});