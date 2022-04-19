import React, {useState} from 'react';

const Categories = ({ items, onClick }) => {
    const [activeItem, setActiveItem] = useState(0)

    const onSelectItem = (index) => {
        setActiveItem(index)
    }

    return (
        <div className="categories">
            <ul>
                {items && items.map((name, index) => 
                    <li onClick={() => onSelectItem(index)} className={activeItem === index ? 'active' : ''} key={`${name} ${index}`}>{ name }</li>
                )}
            </ul>
        </div>
    );
};

export default Categories;