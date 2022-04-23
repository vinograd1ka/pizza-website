import React, {useCallback, useEffect} from 'react';
import {Categories, SortPopup, PizzaBlock, PizzaLoader} from "../components";
import {useDispatch, useSelector} from "react-redux";

import {setCategory, setSortBy} from "../redux/actions/filters-ac";
import {fetchPizzas} from "../redux/actions/pizzas-ac";
import {addPizzaToCart} from "../redux/actions/cart-ac";

const categoryNames = ['All', 'Meat', 'Vegetarian', 'Grill', 'Spicy', 'Closed'];
const sortItems = [
    {name: 'popularity', type: 'popular', order: 'desc'},
    {name: 'price', type: 'price', order: 'desc'},
    {name: 'alphabet', type: 'name', order: 'asc'}
]

const Home = () => {
    const dispatch = useDispatch();

    const {items, isLoaded} = useSelector(({ pizzasReducer }) => pizzasReducer)
    const { category, sortBy } = useSelector(({ filtersReducer }) => filtersReducer)

    const cartItems = useSelector(({ cartReducer }) => cartReducer.items)
    console.log(cartItems)


    useEffect(() => {
        dispatch(fetchPizzas(category, sortBy))
    }, [category, sortBy])

    const onSelectCategory = useCallback((index) => {
        dispatch(setCategory(index))
    }, [])

    const onSelectSortBy = useCallback((type) => {
        dispatch(setSortBy(type))
    }, [])

    const handleAddPizzaToCart = (onClickPizzaData) => {
        dispatch(addPizzaToCart(onClickPizzaData))
    }

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    activeCategory={category}
                    onClickCategory={ onSelectCategory }
                    items={categoryNames}
                />

                <SortPopup
                    activeSortType={sortBy.type}
                    items={sortItems}
                    onClickSortType={onSelectSortBy}
                />
            </div>
            <h2 className="content__title">All pizzas</h2>
            <div className="content__items">
                {isLoaded
                    ? items.map((obj) => <PizzaBlock
                        onClickAddPizza={handleAddPizzaToCart}
                        key={obj.id}
                        isLoading={true}
                        addedCount={cartItems[obj.id] && cartItems[obj.id].length}
                        {...obj}/>
                    )

                    : Array(12)
                        .fill(0)
                            .map((_, index) => (<PizzaLoader key={index} />))
                }
            </div>
        </div>
    );
};

export default Home;