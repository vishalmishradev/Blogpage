"use client"

import {Children, createContext, useState} from 'react';

export const ThemeContext = createContext();
export const ThemeProvider = ({Children}) =>{
    const[mode, setMode] = useState("dark");

    const toggle = ()=>{
        setMode((prev) => (prev === 'dark' ? "light":"dark"));
    };
    <ThemeContext.Provider value ={{toggle, mode}}>
        {Children}
    </ThemeContext.Provider>
}