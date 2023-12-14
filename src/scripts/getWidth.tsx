import React,{useEffect,useState} from "react";

export const getWindowWidth = () => {
    const [width, setWidth] = useState<number>(0);
    useEffect(() => {
        setWidth(window.innerWidth);
        window.addEventListener("resize", () => {
            setWidth(window.innerWidth);
        });
    }, [width]);
    return width;
};