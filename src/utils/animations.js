export const slideUp = {
    visible: {
      opacity: 1,
      translateY: 0,
      transition: {
        ease: "easeOut",
        duration: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      translateY: 10,
    },
  };
  
  export const slideRight = {
    visible: {
      opacity: 1,
      translateX: 0,
      transition: {
        ease: "easeOut",
      },
    },
    hidden: {
      opacity: 0,
      translateX: 50,
    },
  };
  
  export const staggerParent = (staggerDelay = 0.12, duration = 0.5) => {
    return {
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: staggerDelay,
          duration: duration,
        },
      },
      hidden: {
        opacity: 0,
      },
    };
  };
  
  export const fadeIn = {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    },
  };
  
  export const slideLeft = {
    visible: {
      opacity: 1,
      translateX: 0,
      transition: {
        ease: "easeOut",
      },
    },
    hidden: {
      opacity: 0,
      translateX: -50,
    },
  };
  
  export const slideSpring = {
    left: {
      visible: {
        opacity: 1,
        translateX: 0,
        transition: {
          type: "spring",
          duration: 0.5,
        },
      },
      hidden: {
        opacity: 0,
        translateX: -40,
      },
    },
    right: {
      visible: {
        opacity: 1,
        translateX: 0,
        transition: {
          type: "spring",
          duration: 0.5,
        },
      },
      hidden: {
        opacity: 0,
        translateX: 40,
      },
    },
    up: {
      visible: {
        opacity: 1,
        translateY: 0,
        transition: {
          type: "spring",
          duration: 0.5,
        },
      },
      hidden: {
        opacity: 0,
        translateY: 10,
      },
    },
    down: {
      visible: {
        opacity: 1,
        translateY: 0,
        transition: {
          type: "spring",
          duration: 0.5,
        },
      },
      hidden: {
        opacity: 0,
        translateY: -10,
      },
    },
  };