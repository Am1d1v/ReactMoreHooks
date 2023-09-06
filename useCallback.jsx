import React, { useState, useCallback} from "react";


const CountButtons = React.memo(({onClick, count}) => {
    console.log('render', count)
    return <button onClick={onClick}>{count}</button>
})

function DualCounter(){

    const [count1, setCount1] = useState(0)
    const increment1 = useCallback(() => setCount1(count => count + 1), []);

    const [count2, setCount2] = useState(0)
    const increment2 = useCallback(() => setCount2(count => count + 1), []);

    console.log('render', `Count1: ${count1}, Count2: ${count2}`);

    return(
        <div>
            <CountButtons count={count1} onClick={increment1}/>
            <CountButtons count={count2} onClick={increment2}/>
        </div>
    )
}

export {CountButtons, DualCounter};