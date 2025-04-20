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
        setHref,
        setNavbarRouteState,
        navbarRouteState,
        handlePageChange,
        handleToggleTheme
    } = useAppContext();

    const handleClick = (href) => {
      
        if((!isSameRoute(href) && true) || isSameRoute(href)) {
            setNavbarRouteState(href);
            setHref(href);
            handlePageChange(href);
        }
    }
    return (
        <header className="fixed bottom-0 z-20 flex items-center justify-center w-screen h-16 py-0 border-t border-[var(--border)] bg-[var(--bg)] lg:top-0 lg:border-r lg:border-t-0 lg:w-16 lg:h-full lg:flex-col lg:py-4">
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
                      className="absolute top-0 w-full h-full lg:w-px lg:-right-2 !opacity-10 lg:!opacity-100 right-0 rounded-lg bg-[var(--nav-active)]"
                      layoutId="line"
                    />
                    
                  )}
                </IconButton>
              ))}
            </ul>
          </nav>
          <ul className="absolute lg:bottom-4 right-4 lg:right-auto">
              <IconButton tooltip="Toggle theme"
                icon="sun-moon"
                iconSize="1.5rem"
                handleClick={handleToggleTheme}
                />
            </ul>
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
          className={`relative block p-3 cursor-pointer rounded-md`}
          aria-label={tooltip}
          id={tooltip}
          onClick={(e) => {
            e.preventDefault();
            handleClick(href);
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <DynamicIcon name={iconNode} size={iconSize} strokeWidth={1.5} color={isActive ? "var(--active)" : "var(--inactive)"}/>
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