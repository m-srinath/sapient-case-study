import * as Actions from './action-types';

const initialState = {
    Species: [],
    Gender: [],
    Origin: [],
    FilteredCharacters: [],
    TotalCharacters: []
};

export const characterReducer = (state = initialState, action) => {
    switch(action.type) {
        case Actions.SORT_BY_ID:
            return {
                ...state,
                FilteredCharacters: action.payload
            }
        case Actions.SORT_BY_ASC:
            return {
                ...state,
                FilteredCharacters: action.payload
            }

            case Actions.SORT_BY_DESC:
                return {
                    ...state,
                    FilteredCharacters: action.payload
                }
        default: 
            return state
        }
}