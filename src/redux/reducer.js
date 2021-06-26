
import { combineReducers } from 'redux';
import {  SEARCH_ENTITY, ADD_BOOKMARK, REMOVE_BOOKMARK } from './actions';

const initialState = {
    items: [],
    history: [],
    bookmarks: []
};

const listing = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_ENTITY:
            return { 
                ...state, 
                items: action.item
            };
        case ADD_BOOKMARK:
            return { 
                ...state, 
                bookmarks: [...state.bookmarks, action.item]
            };
        case REMOVE_BOOKMARK:
        return { 
            ...state, 
            bookmarks: [
                ...state.bookmarks.slice(0,action.item), 
                ...state.bookmarks.slice(action.item + 1)]
        };
        default:
            return state;
    }
}

export default CombinedReducers = combineReducers({
    listing
});