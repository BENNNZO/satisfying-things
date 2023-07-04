"use client"

import React from 'react';
import { motion } from 'framer-motion';

export default function ButtonThing() {
    return (
        <div className='h-screen'>
            <div className='absolute-center h-40 w-96 shadow-sm rounded-2xl'>
                <span className='absolute top-0 left-0 h-40 w-96 bg-red-600 rounded-2xl'></span>
                <motion.div 
                    className='absolute top-0 left-0 grid place-items-center cursor-pointer h-40 w-96 rounded-2xl bg-red-500'
                    initial={{ transform: "translateY(-1rem)" }}
                    whileTap={{ transform: "translateY(0)" }}
                >
                    <p className='select-none text-white text-5xl font-mono font-bold'>Press Me!</p>
                </motion.div>
            </div>
        </div>
    )
}