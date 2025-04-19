"use client";

import { usePathname, useRouter } from "next/navigation";
import { createContext, useContext, useState } from "react";

const AppContext = createContext();
const useAppContext = () => useContext(AppContext);


const AppProvider = ({children}) => {
    const router = useRouter();
    const pathName = usePathname();

    const [href, setHref] = useState(null);
    const [navbarRouteState, setNavbarRouteState] = useState(pathName);


    const isSameRoute = (thisHref, route = null) => {
        const currentRoute = route || pathName;
        const is = currentRoute === thisHref || (currentRoute !== "/" && currentRoute?.match(/^\/[A-Za-z]+/)?.[0] === thisHref);
        return is;
    }
    
    const handlePageChange = (immediateHref) => {
        const toHref = immediateHref || href;
        if (toHref !== null && !isSameRoute(toHref)) {
            router.push(toHref);
        }
    }

    const handleDirectPageChange = (href) => {
        setNavbarRouteState(href);
        setHref(href);
        handlePageChange(href);
    }

    return (<AppContext.Provider
            value ={{
                isSameRoute,
                navbarRouteState,
                setNavbarRouteState,
                setHref,
                handlePageChange,
                handleDirectPageChange
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export {AppProvider, useAppContext};