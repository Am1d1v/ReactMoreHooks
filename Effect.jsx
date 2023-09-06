import React, { useEffect } from "react";


const Effect = () => {


    useEffect(() => {
        const handler = () => {};
        document.addEventListener('click', handler)
    }, [])

    useEffect(function someFn(){

    }, [])

    return(
        <div>

        </div>
    )
}

export default Effect;