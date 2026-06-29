import React from 'react';

function Car2(props) {
    return (
        <div>
            <h2 className='pinkcolor' style={{backgroundColor: props.color, color: 'black'}}>나는 바퀴가 {props.wheel}이고 {props.year}년에 출시되었고 {props.brand}브랜드 차이며 모델은 {props.model}이고 {props.color}색상으로 구성되어있어</h2>
        </div>
    );
}

export default Car2;