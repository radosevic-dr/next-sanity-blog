"use client";
import { useState } from "react";
import { createContext } from "use-context-selector";

export const NavContext = createContext(null);

export const NavContextProvider = ({ children }) => {
    const [menu, setMenu] = useState(false);
    const handleMenu = () => setMenu(!menu);
    return (
        <NavContext.Provider value={{ menu, handleMenu }}>{children}</NavContext.Provider>
    );
};
