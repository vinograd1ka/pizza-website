import {pizzasAPI} from "../../api";

export const setLoaded = val => ({
    type: 'SET-LOADED',
    payload: val
})

export const fetchPizzas = (category, sortBy) => (dispatch) => {
    dispatch(setLoaded(false))
    if (category === 0) {
        pizzasAPI.getPizzas(sortBy)
            .then(data => {
                dispatch(setPizzas(data))
            })
    }

    else {
        pizzasAPI.sortPizzas(category, sortBy)
            .then(data => {
                dispatch(setPizzas(data))
            })
    }
}
export const setPizzas = (items) => ({
    type: 'SET-PIZZAS',
    payload: items
})
