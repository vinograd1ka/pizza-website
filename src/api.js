import * as axios from "axios";

export const pizzasAPI = {
    getPizzas (sortBy) {
        return axios.get(
            `/pizzas?$&_sort=${sortBy.type}&_order=${
                sortBy.order
            }`,
        ).then(response => response.data)
    },

    sortPizzas (category, sortBy) {
        return axios.get(
            `/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${
                sortBy.order
            }`,
        ).then(response => response.data)
    },
}

