import React from 'react';
import sleeping from '../../../images/sleeping.png'

const NotFound = () => {
    return (
        <div>
            <h3 className='text-primary text-center'>Mechanic is sleeping</h3>
            <img className='text-center w-25' src={sleeping} alt="" />
        </div>
    );
};

export default NotFound;