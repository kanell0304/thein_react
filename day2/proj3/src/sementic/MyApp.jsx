import React, { useState } from 'react';
import MyUseState from './MyUseState';
import MyButton from './MyButton';

function MyApp(props) {

    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 10);
    }

    return (
        <div>
            <MyUseState />
            <MyUseState />
            <h1>컴포넌트</h1>
            <MyButton handleClick={handleClick} count={count} />
            <MyButton handleClick={handleClick} count={count} />
        </div>
    );
}

export default MyApp;