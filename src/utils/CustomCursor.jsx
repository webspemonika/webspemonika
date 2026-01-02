// 1...........................................................................
// / hover effect bat
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const [trail, setTrail] = useState({ x: 0, y: 0 });

    useEffect(() => {
        // mouse move
        const move = (e) => setPos({ x: e.clientX, y: e.clientY });
        window.addEventListener("mousemove", move);

        // simple trailing effect
        const interval = setInterval(() => {
            setTrail((prev) => ({
                x: prev.x + (pos.x - prev.x) * 0.15, y: prev.y + (pos.y - prev.y) * 0.15,
            }));
        }, 16);

        return () => {
            window.removeEventListener("mousemove", move);
            clearInterval(interval);        //tail 
        };
    }, [pos]);

    return (
        <>
            {/* small instant cursor (center dot) */}
            <div
                style={{
                    position: "fixed",
                    top: pos.y,
                    left: pos.x,
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    backgroundColor: "#ff014f",
                    // backgroundImage:"",
                    // transform: "translate(-50%, -50%)",
                    pointerEvents: "none",
                    zIndex: 9999,
                }}
            />

            {/* smooth trailing cursor */}
            <motion.div
                animate={{
                    x: trail.x,
                    y: trail.y,
                }}
                transition={{ type: "spring", stiffness: 100, damping: 30 }}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: 30,
                    height: 30,
                    borderRadius: "50%",
                    backgroundColor: "#ffffff1a",
                    transform: "translate(-50%, -50%)",
                    pointerEvents: "none",
                    zIndex: 99991,
                }}
            />
        </>
    );
}






