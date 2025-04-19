"use client";
import {motion} from "motion/react";

import { useContext, useState } from "react";
import { useAppContext } from "@/app/provider";
import ROUTES from "@/app/routes";
import { DynamicIcon } from "lucide-react/dynamic";
import { slideSpring } from "@/utils/animations";

const doubleBounce = {
    x: [0, 5, -5, 5, 0],
    transition: {
        duration:0.5,
        type: "spring",
    },

}


const NavButton = (props, showWhenSmall = true) => {
    const {
        isSameRoute,
        pageAnimate,
        setHref,
        setNavbarRouteState,
        handlePageChange,
        navbarRouteState,
    } = useAppContext();
    const handleClick = (href) => {
        if((!isSameRoute(href) && true) || isSameRoute(href)) {
            setNavbarRouteState(href);
            setHref(href);
            handlePageChange(href);
        }
    }
    if(props.direction == "down")
        return (
            <div className={`hidden flex-col items-center justify-start w-full  text-[#535353] lg:flex`}>
                <h2>{props.pageName}</h2>
                <motion.a href={props.href}
                    animate={{ y: [0, 8, 0], opacity:1}} // moves down 8px and back up
                    transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        repeatType: "loop",                  
                        ease: "easeInOut",
                    }}
                    onClick={(e) => {
                        e.preventDefault();
                        handleClick(props.href);
                    }}
                >
                    <DynamicIcon name="chevrons-down" size="1.5rem" strokeWidth={1.5} color="#535353"></DynamicIcon>
                </motion.a>
            </div>
        )
    else if (props.direction=="up") {
        return (
            <div className={`hidden flex-col items-center justify-start w-full absolute top-5 text-[#535353] lg:flex`}>
                <motion.a href={props.href}
                    animate={{ y: [0, -8, 0], opacity:1}} // moves down 8px and back up
                    transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        repeatType: "loop",                  
                        ease: "easeInOut",
                    }}
                    onClick={(e) => {
                        e.preventDefault();
                        handleClick(props.href);
                    }}
                >
                    <DynamicIcon name="chevrons-up" size="1.5rem" strokeWidth={1.5} color="#535353"></DynamicIcon>
                </motion.a>
                <h2>{props.pageName}</h2>
            </div>
        )
    } else {
        return (
            <h1 className="text-red-500">Something went wrong, please refresh.</h1>
        )
    }
}
export default NavButton;