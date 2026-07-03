import React, { useState } from 'react';

function Square(props) {

    const [isClick, setIsClick] = useState(false);
    const [OorX, setOorX] = useState(true);

    function handleClick() {
        console.log("클릭!" + props.isO);
        if (!isClick) {
            setIsClick(true);
            setOorX(props.isO); 
            props.changeIsO(!props.isO);
        }
    }

    return (
        <>
            <button style={{width: '37px', height: '37px'}} onClick={handleClick} className="square"><h2>{isClick ? OorX ? 'O' : 'X' : props.value}</h2></button>
        </>
    );
}

export default Square;