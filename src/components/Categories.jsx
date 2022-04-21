import React, {memo, useState} from 'react';
import PropTypes from "prop-types";
import PizzaBlock from "./PizzaBlock/PizzaBlock";

const Categories = memo(function Categories({ activeCategory, onClickCategory, items }) {
    return (
        <div className="categories">
            <ul>
                {items && items.map((name, index) =>
                    <li
                        onClick={() => onClickCategory(index)}
                        className={activeCategory === index ? 'active' : ''}
                        key={`${name} ${index}`}>
                        { name }
                    </li>
                )}
            </ul>
        </div>
    );
})

Categories.propTypes = {
    activeCategory: PropTypes.number.isRequired,
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    onClickCategory: PropTypes.func.isRequired
}

Categories.defaultProps = {
    activeCategory: 0,
    items: []
}


export default Categories;