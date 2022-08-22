import React, { useEffect, useState } from 'react'


function UsewindowSize() {
    const [size, setSize] = useState([window.innerHeight, window.innerWidth])

    useEffect(() => {
        const handleResize = () => {
            setSize([window.innerHeight, window.innerWidth])
        }
        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])
    return size;

}

export const BreakPoint = () => {
    const [height, width] = UsewindowSize()
    return (
        <>



        </>
    )
}
