import React from 'react';

function MyButton(props) {
    return (
        <div>
            <button onClick={props.handleClick}>클릭 {props.count}번</button>
        </div>
    );
}

export default MyButton;