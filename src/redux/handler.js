import {SEARCH_ENTITY, ADD_BOOKMARK, REMOVE_BOOKMARK} from './actions';


export const searchEntity = (item) => ({
    type: SEARCH_ENTITY,
    item: item 
});

export const addBookmark = (item) => ({
    type: ADD_BOOKMARK,
    item: item 
});

export const removeBookmark = (item) => ({
    type: REMOVE_BOOKMARK,
    item: item 
});