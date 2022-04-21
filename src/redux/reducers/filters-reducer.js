const initialState = {
    category: 0,
    sortBy: { type: 'popular', order: 'desc' }
}

const filtersReducer = (state = initialState, action) => {
    if (action.type === 'SET-SORT-BY') {
        return {
            ...state,
            sortBy: action.payload
        }
    }
    if (action.type === 'SET-CATEGORY') {
        return {
            ...state,
            category: action.payload
        }
    }
    return state;
}

export default filtersReducer;