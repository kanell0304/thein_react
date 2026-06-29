import React from 'react';

function MyList(props) {
    return (
        <div>
            <hr />
            <h1>MyList</h1>
            <ul>{
                data.map((num, index) => (
                    <li key={index}>{num}</li>
                ))
                }</ul>
        </div>
    );
}

export default MyList;