"use client";

import { motion } from "motion/react";
import { useContext, useState } from "react";
import { useAppContext } from "@/app/provider";
import ROUTES from "@/app/routes";
import Tooltip from "./Tooltip";
import { Icon } from "lucide-react";
import { DynamicIcon } from "lucide-react/dynamic";


const Navbar = () => {
    const {
        isSameRoute,
        pageAnimate,
        togglePageAnimate,
        setHref,
        setNavbarRouteState,
        navbarRouteState,
    } = useAppContext();

    const handleClick = (href) => {
        if((!isSameRoute(href) && pageAnimate) || isSameRoute(href)) {
            setNavbarRouteState(href);
            setHref(href);
            togglePageAnimate();
        }
    }
    return (
        <header className="fixed bottom-0 z-20 flex items-center justify-center w-screen h-16 py-0 border-t border-border bg-bg lg:top-0 lg:border-r lg:border-t-0 lg:w-16 lg:h-full lg:flex-col lg:py-4">
          <nav>
            <ul className="flex items-center justify-center w-full h-full gap-2 lg:flex-col ">
              
              {ROUTES.map((route, index) => (
                <IconButton
                  isActive={isSameRoute(route.href)}
                  tooltip={route.href}
                  icon={route.icon}
                  handleClick={handleClick}
                  href={route.href}
                  key={route.href}
                >
                  {isSameRoute(route.href, navbarRouteState) && (
                    <motion.div
                      className="absolute top-0 w-full h-full lg:w-px bg-pg lg:-right-2 !opacity-10 lg:!opacity-100 right-0 rounded-lg"
                      layoutId="line"
                    />
                    
                  )}
                </IconButton>
              ))}
            </ul>
          </nav>
        </header>
      );
}



const IconButton = ({
    isActive,
    tooltip,
    handleClick,
    icon: iconNode,
    iconSize = "1.5rem",
    href,
    children,
  }) => {
    const [isHovered, setNavbarRouteState] = useState(false);
    const handleMouseEnter = () => {
      setNavbarRouteState(true);
    };
  
    const handleMouseLeave = () => {
      setNavbarRouteState(false);
    };
    
    return (
      <li>
        <a
          href={href}
          className={`relative block p-3 cursor-pointer ${isActive ? "#d3d3d3" : "#707070"} rounded-md`}
          aria-label={tooltip}
          id={tooltip}
          onClick={(e) => {
            console.log('hi')
            e.preventDefault();
            handleClick(href);
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <DynamicIcon name={iconNode} size={iconSize} strokeWidth={1.5}/>
          {children}
          <Tooltip
            hoveredState={isHovered}
            text={tooltip}
            direction="left"
            isHiddenResponsive
          />
        </a>
      </li>
    );
  };
  
  
export default Navbar;