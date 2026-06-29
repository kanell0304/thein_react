import React from 'react';

function Car1(props) {
    return (
        <div>
            <h2 class={props.color}>나는 {props.color}색 스포츠카 라고해!</h2>
            {/* <h2 className={props.color}> </h2> */}
        </div>
    );
}

export default Car1;