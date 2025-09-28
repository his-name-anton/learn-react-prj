import React from 'react';
import * as classes from './Counter.module.scss';

export const Counter = () => {

    const [count, setCount] = React.useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    return (
        <div className={classes.btn}>
            <h1>{count}</h1>
            <button onClick={() => increment()}>+1</button>
        </div>
    );
};

