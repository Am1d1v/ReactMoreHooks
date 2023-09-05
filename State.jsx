import React, { useState, useEffect } from "react";


const State = () => {

    const [state, setState] = useState({
        count: 0,
        isCounting: false
    })

    /*
    const [value, setValue] = useState(() => {
        const userCount = localStorage.getItem('count');
        return +userCount || 0;
    });
    */

    const handleCount = () => {
        setState({count: state.count + 1})
    }

    const handleStatus = () => {
        setState({isCounting: !state.isCounting})
    }

    useEffect(() => {
        console.log(state);
    }, [state])

    return(
        <div>
            <button onClick={handleCount}>Click Count</button>
            <button onClick={handleStatus}>Click Status</button>
        </div>
    )
}

export default State;