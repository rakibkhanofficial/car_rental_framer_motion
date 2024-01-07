'use client'

import { createContext, useState } from "react"

export const SearchContext=createContext()

export const SearchProviderContext=({children})=>{
    const [searchActive,setSearchActive]=useState(false);
    return(
        <SearchContext.Provider value={{searchActive,setSearchActive}}>
            {children}
        </SearchContext.Provider>
    )
};

export const useSearchContext=()=>useSearchContext(SearchContext);

