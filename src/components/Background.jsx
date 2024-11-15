import { ThpaceGL } from "thpace";

import { useEffect, useRef } from "react";

export default function Background() {
    const refContainer = useRef()
    useEffect(() => {
        const canvas = document.querySelector(".background")
        const settings = {
            colors: ['#3B1E54', '#9B7EBD', '#D4BEE4'],
            triangleSize: 75,
        };
        
        let thpace = ThpaceGL.create(canvas, settings)
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
    });

    return (
        <canvas className="background"></canvas>
    );
}