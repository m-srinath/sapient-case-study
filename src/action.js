import * as Actions from './action-types';

export function sortById (data) {
    return {
        type: Actions.SORT_BY_ID,
        payload: data
    }
}

export function sortByAsc (data) {
    return {
        type: Actions.SORT_BY_ASC,
        payload: data
    }
}

export function sortByDesc (data) {
    return {
        type: Actions.SORT_BY_DESC,
        payload: data
    }
}