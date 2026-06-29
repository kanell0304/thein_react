import React from 'react';
import Car from './Car';
import Car2 from './Car2';

function Garage(props) {

    const x = "바퀴";

    return (
        <div>
            <Car brand="Ford" />
            <Car brand="BMW" />
            <Car brand="르노" />
            <Car brand="현대" />
            <Car2 wheel={x} year={1969} brand="Ford" model="Mustang" color="red" />
            <Car2 wheel={x} year={1979} brand="BMW" model="8222" color="yellow" />
            <Car2 wheel={x} year={1989} brand="르노" model="XM3" color="green" />
            <Car2 wheel={x} year={1999} brand="현대" model="기아몰리" color="purple" />
        </div>
    );
}

export default Garage;