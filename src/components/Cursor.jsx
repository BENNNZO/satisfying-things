"use client"

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function cursor() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

    useEffect(() => {
        window.addEventListener("mousemove", e => {
            setMousePos({ x: e.clientX, y: e.clientY })
        })

        return () => window.removeEventListener("mousemove", e => {
            setMousePos({ x: e.clientX, y: e.clientY })
        })
    }, [])

    return (
        <div 
            className='absolute h-screen w-screen top-0 left-0'
        >
            <p className='absolute top-10 left-10 text-black'>
                x: {mousePos.x}
            </p>
            <p className='absolute top-14 left-10 text-black'>
                y: {mousePos.y}
            </p>
            {/* <motion.div 
                className='absolute w-10 h-10 bg-red-300'
                animate={{ translateX: mousePos.x, translateY: mousePos.y }}
            ></motion.div> */}
            {/* <motion.div 
                className='absolute w-10 h-10 bg-red-300'
                animate={{ x: mousePos.x, y: mousePos.y }}
                transition={{ type: "tween" }}
            /> */}
            <motion.div 
                className='absolute w-10 h-10 bg-red-300'
                animate={{ x: mousePos.x, y: mousePos.y }}
                transition={{ type: "spring" }}
            />
        </div>
    )
}