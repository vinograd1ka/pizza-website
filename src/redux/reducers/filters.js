const initialState = {
    category: 0,
    sortBy: 'popular'
}

const filters = (state = initialState, action) => {
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

export default filters;