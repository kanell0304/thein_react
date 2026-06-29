import React from 'react';

function Car(props) {
    return (
        <div>
            <h2>내 차는 {props.brand} 차야!</h2>
        </div>
    );
}

export default Car;