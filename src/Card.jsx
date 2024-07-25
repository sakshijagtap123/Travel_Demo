import React, { useState } from 'react';
import './Card.css';
import data from './data'; // Import the data

// ReadMore Component
const ReadMore = ({ text, maxLength = 100 }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div>
            {isExpanded ? text : `${text.substring(0, maxLength)}...`}
            <a onClick={toggleReadMore}
                style={{
                    cursor: 'pointer',
                    color: 'blue',
                    textDecoration: 'none',
                    marginLeft: '5px',
                }}
            >
                {isExpanded ? 'Read Less' : 'Read More'}
            </a>
        </div>
    );
};

// Card Component
const Card = () => {
    const [items, setItems] = useState(data); // Use imported data

    const handleDelete = (id) => {
        setItems(items.filter(item => item.id !== id));

/*
        items is the current state of your list of items.
.filter() is an array method that creates a new array with all elements that pass the condition 
specified in the callback function.
The callback function 
item => item.id !== id is used to determine whether an item should be included in the new array.
item.id !== id checks if the id of the current item does not match the id of the item to be deleted. 
If it doesn't match, the item is included in the new array; otherwise, it is excluded.
  */
 
};

    return (
        <>
            <h1 className='heading'>Travel With SDJ</h1>
            <div className="card-container">
                {items.map(item => (
                    <div key={item.id} className='card'>
                        <img src={item.image} alt={item.name} className='card-image' />
                        <div className='card-content'>
                            <h2>{item.name}</h2>
                            <ReadMore text={item.info} maxLength={100} />
                            <p className="card-price">Price: {item.price}</p>
                            <button
                                onClick={() => handleDelete(item.id)}
                                style={{
                                    backgroundColor: '#ff6f61',
                                    color: 'white',
                                    border: 'none',
                                    padding: '10px',
                                    borderRadius: '4px',
                                    cursor: 'pointer',
                                }}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Card;
