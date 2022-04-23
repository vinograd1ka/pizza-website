const initialState = {
    items: {},
    totalPrice: 0,
    itemsCount: 0
}

// state = {
//     items: { //items: {
//         0: [ //[action.payload.id]: [ зависит от id который передался (если будет клик по добавлении другой пиццы - то создаться с другим id для другой пиццы)
//             {},//...state.items[action.payload.id],
//             {}, //...state.items[action.payload.id],
//             {} // action.payload
//         ]
//     },
//     totalPrice: 0,
//     itemsCount: 0,
// }

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-PIZZA-CART': {
            const newItems = {
                ...state.items,
                [action.payload.id]: !state.items[action.payload.id]
                    ? [action.payload]
                    : [...state.items[action.payload.id], action.payload]
            }

            const allPizzas = [].concat.apply([], Object.values(newItems))
            const totalPrice = allPizzas.reduce((sum, obj) => obj.price + sum, 0)

            return {
                ...state,
                items: newItems,
                itemsCount: allPizzas.length,
                totalPrice
            };
        }

        default:
            return state;
    }
}

export default cartReducer;