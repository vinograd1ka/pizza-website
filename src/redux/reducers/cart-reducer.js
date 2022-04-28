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

const getTotalPrice = arr => arr.reduce((sum, obj) => obj.price + sum, 0)

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-PIZZA-CART': {
            const currentPizzaItems = !state.items[action.payload.id]
                ? [action.payload]
                : [...state.items[action.payload.id].items, action.payload];

            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    items: currentPizzaItems,
                    totalPrice: getTotalPrice(currentPizzaItems)
                 }
            }
            const items = Object.values(newItems).map((obj) => obj.items)
            const allPizzas = [].concat.apply([], Object.values(items))
            const totalPrice = getTotalPrice(allPizzas)

            return {
                ...state,
                items: newItems,
                itemsCount: allPizzas.length,
                totalPrice
            };
        }

        case 'REMOVE-CART-ITEM': {
            const newItems = {
                ...state.items,
            };
            const currentTotalPrice = newItems[action.payload].totalPrice;
            const currentTotalCount = newItems[action.payload].items.length;

            delete newItems[action.payload];
            return {
                ...state,
                items: newItems,
                totalPrice: state.totalPrice - currentTotalPrice,
                itemsCount: state.itemsCount - currentTotalCount,
            };
        }

        case 'CLEAR-CART':
            return {
                ...state,
                items: {},
                totalPrice: 0,
                itemsCount: 0
            }



        default:
            return state;
    }
}

export default cartReducer;