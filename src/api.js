import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:3001/'
})

export const pizzasAPI = {
    getPizzas () {
        return instance.get(`pizzas`)
            .then(response => response.data)
    },
    sortPizzas (category, sortBy) {
        return instance.get(`pizzas?category=${category}&_sort=${sortBy.type}&_order${sortBy.order}`)
            .then(response => response.data)
    },
}

