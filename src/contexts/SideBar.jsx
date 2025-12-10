import { createContext, useState } from "react";

export const SideBarContext = createContext();


export const SideBarProvider = ({children}) => {
    const [isOpen, setisOpen] = useState(false);

    return (
        <SideBarContext.Provider value={{isOpen,setisOpen}}>
            {children}
        </SideBarContext.Provider>
    )
}


