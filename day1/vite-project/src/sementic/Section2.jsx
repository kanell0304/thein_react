import React from 'react';

const products = [
    {title: 'Cabage', id: 1},
    {title: 'Garlic', id: 2},
    {title: 'Apple', id: 3}
]

function Section2(props) {

    const listItems = products.map((product) => {
        <li key={product.id}>{product.title}</li>
    })

    return (
        <div>
            <hr />
            <ul>{listItems}</ul>
            <hr />
        </div>
    );
}

export default Section2;