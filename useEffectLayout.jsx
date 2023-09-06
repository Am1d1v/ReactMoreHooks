import { useEffect, useLayoutEffect, useState } from "react"


const Rand = () => {
    const [value, setValue] = useState(0);

    useLayoutEffect(() => {
        if(value === 0){
            setValue((Math.random() * 100).toFixed(0));
        }
    }, [value])

    console.log('rendered', value);

    return <button onClick={() => setValue(0)}>{value}</button>
}

export default Rand;
