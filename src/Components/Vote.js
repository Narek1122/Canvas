import React from 'react';

const Vote = (props) => {
    let val = ''
    return (
        <div>
            <input type="number" onChange={(e) => {
                val = e.target.value
            }}  placeholder={'please insert 800-1400 vote quantity'}/>
            <button onClick={() => props.a(val)}>Add Vote Quantity</button>
        </div>
    );
};

export default Vote;