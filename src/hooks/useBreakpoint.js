import React, { useEffect, useState } from 'react'

const useBreakpoint = () => {
    const [breakpoint, setBreakPoint] = useState(0);
    const [windowSize, setWindowSize] = useState({
        width: undefined,
    });

    const handleResize = () => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    };
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize();

        setBreakPoint(windowSize.width)

        return () => window.removeEventListener('resize', handleResize);
    }, [windowSize.width]);

    return breakpoint;
}

export default useBreakpoint