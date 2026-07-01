import React, { useRef } from 'react';

function MyApp2(props) {

    const inputElement = useRef();

    const focusinput = () => {
        inputElement.current.focus();
    }

    return (
        <div>
            // 버튼 클릭시에 인풋박스 setFocus에 추가.
            <input type="text" ref={inputElement} />
            <button onClick={focusinput} >Focus 인풋박스</button>
            <hr />
        </div>
    );
}

export default MyApp2;