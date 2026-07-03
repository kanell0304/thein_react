import React, { useState } from 'react';

function MyUseState(props) {

    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div onClick={handleClick}>
            <button>클릭 {count}번</button>
        </div>
    );
}

export default MyUseState;