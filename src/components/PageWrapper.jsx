"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { useAppContext } from "@/app/provider";

export default function PageWrapper({children, ...props}) {
    const [hide, setHide] = useState(false);
    const { togglePageAnimate, pageAnimate, handlePageChange, isFunnyToggle } = useAppContext();
    useEffect(() => {
        if (!pageAnimate) togglePageAnimate();
      }, []);
    return <motion.div
            className="items-center justify-center mb-16 overflow-hidden lg:mb-0 lg:ml-16"
            style={{display: hide ? "none" : "flex"}}
            initial="hidden"
            animate={true ? "visible" : "hidden"}
            onAnimationComplete={() =>{
                handlePageChange();
            }}
            {...props}
        >
            {children}
        </motion.div>
}