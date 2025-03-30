import { motion, useInView } from 'framer-motion';
import React, { createContext, useContext, useRef } from 'react';

// Create a context to share the inView state
const AnimatedLinesContext = createContext({ isInView: false });
AnimatedLinesContext.displayName = "AnimatedLinesContext";

// Animated Gradient component
function AnimatedGradient({ children, animate, transition, ...props }) {
    const { isInView } = useContext(AnimatedLinesContext);

    const initialState = {
        x1: animate.x1[0],
        y1: animate.y1[0],
        x2: animate.x2[0],
        y2: animate.y2[0]
    };

    const animateState = isInView ? animate : initialState;
    const delayValue = transition?.delay ? transition.delay + 1 : 1;

    return (
        <motion.linearGradient
            animate={animateState}
            gradientUnits="userSpaceOnUse"
            transition={{
                ...transition,
                delay: delayValue
            }}
            {...props}
            {...initialState}
        >
            {children}
        </motion.linearGradient>
    );
}

export function AnimatedLines(props) {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true,
        margin: "-35%"
    });

    const lineAnimation = {
        animate: {
            pathLength: +!!isInView,
            transition: {
                duration: 1.2
            }
        }
    };

    const circleAnimation = {
        animate: {
            opacity: +!!isInView,
            transition: {
                delay: 1,
                duration: 0.5
            }
        }
    };

    return (
        <AnimatedLinesContext.Provider value={{ isInView }}>
            <svg
                fill="none"
                height="228"
                ref={ref}
                role="img"
                viewBox="0 0 891 264"
                width="891"
                {...props}
                aria-label="A bunch of connecting lines that form into the CPU, with the text Powered By on top of the the CPU. Gradient lines are animating along the drawn lines, dissolving into the CPU in the center."
            >
                <motion.path
                    d="M388 96L388 68C388 65.7909 386.209 64 384 64L310 64"
                    stroke="var(--accents-8)"
                    strokeOpacity="0.1"
                    {...lineAnimation}
                    transition={{
                        delay: 1 - 0.9
                    }}
                />
                <motion.path
                    d="M349 150L73 150C70.7909 150 69 151.791 69 154L69 172"
                    stroke="var(--accents-8)"
                    strokeOpacity="0.1"
                    {...lineAnimation}
                    transition={{
                        delay: 1 - 0.8
                    }}
                />
                <g>
                    <motion.path
                        d="M547 130L822 130C824.209 130 826 131.791 826 134L826 264"
                        stroke="var(--accents-8)"
                        strokeOpacity="0.1"
                        {...lineAnimation}
                        transition={{
                            delay: 1 - 0.7
                        }}
                    />
                    <path
                        d="M547 130L822 130C824.209 130 826 131.791 826 134L826 264"
                        stroke="url(#orange-pulse-1)"
                        strokeWidth="2"
                    />
                </g>
                <g>
                    <motion.path
                        d="M349 130L5.00002 130C2.79088 130 1.00001 131.791 1.00001 134L1.00001 264"
                        stroke="var(--accents-8)"
                        strokeOpacity="0.1"
                        {...lineAnimation}
                        transition={{
                            delay: 0.4
                        }}
                    />
                    <path
                        d="M349 130L5.00002 130C2.79088 130 1.00001 131.791 1.00001 134L1.00001 264"
                        stroke="url(#blue-pulse-1)"
                        strokeLinecap="round"
                        strokeWidth="2"
                    />
                </g>
                <g>
                    <motion.path
                        d="M547 150L633 150C635.209 150 637 151.791 637 154L637 236C637 238.209 635.209 240 633 240L488 240C485.791 240 484 241.791 484 244L484 264"
                        stroke="var(--accents-8)"
                        strokeOpacity="0.1"
                        {...lineAnimation}
                        transition={{
                            delay: 0.5
                        }}
                    />
                    <path
                        d="M547 150L633 150C635.209 150 637 151.791 637 154L637 236C637 238.209 635.209 240 633 240L488 240C485.791 240 484 241.791 484 244L484 264"
                        stroke="url(#pink-pulse-2)"
                        strokeLinecap="round"
                        strokeWidth="2"
                    />
                </g>
                <g>
                    <motion.path
                        d="M388 184L388 194C388 196.209 386.209 198 384 198L77 198C74.7909 198 73 199.791 73 202L73 264"
                        stroke="var(--accents-8)"
                        strokeOpacity="0.1"
                        {...lineAnimation}
                        transition={{
                            delay: 0.6
                        }}
                    />
                    <path
                        d="M388 184L388 194C388 196.209 386.209 198 384 198L77 198C74.7909 198 73 199.791 73 202L73 264"
                        stroke="url(#blue-pulse-2)"
                        strokeLinecap="round"
                        strokeWidth="2"
                    />
                </g>
                <motion.path
                    d="M412 96L412 0"
                    stroke="url(#paint0_linear_341_27683)"
                    strokeOpacity="0.1"
                    {...lineAnimation}
                    transition={{
                        delay: 0.7
                    }}
                />
                <g>
                    <motion.path
                        d="M412 263.5L412 184"
                        stroke="var(--accents-8)"
                        strokeOpacity="0.1"
                        {...lineAnimation}
                        animate={{
                            ...lineAnimation.animate,
                            scale: -1
                        }}
                        transition={{
                            delay: 0.8
                        }}
                    />
                    <path
                        d="M412 263.5L412 184"
                        stroke="url(#pink-pulse-1)"
                        strokeLinecap="round"
                        strokeWidth="2"
                    />
                </g>
                <g>
                    <motion.path
                        d="M508 96L508 88C508 85.7909 509.791 84 512 84L886 84C888.209 84 890 85.7909 890 88L890 264"
                        stroke="var(--accents-8)"
                        strokeOpacity="0.1"
                        {...lineAnimation}
                        transition={{
                            delay: 0.9
                        }}
                    />
                    <path
                        d="M508 96L508 88C508 85.7909 509.791 84 512 84L886 84C888.209 84 890 85.7909 890 88L890 264"
                        stroke="url(#orange-pulse-2)"
                        strokeWidth="2"
                    />
                </g>
                <motion.path
                    d="M436 96L436 0"
                    stroke="url(#paint1_linear_341_27683)"
                    strokeOpacity="0.1"
                    {...lineAnimation}
                    transition={{
                        delay: 1
                    }}
                />
                <motion.path
                    d="M436 214L436 184"
                    stroke="var(--accents-8)"
                    strokeOpacity="0.1"
                    {...lineAnimation}
                    animate={{
                        ...lineAnimation.animate,
                        scale: -1
                    }}
                    transition={{
                        delay: 1
                    }}
                />
                <motion.path
                    d="M460 96L460 64"
                    stroke="var(--accents-8)"
                    strokeOpacity="0.1"
                    {...lineAnimation}
                    transition={{
                        delay: 1
                    }}
                />
                <motion.path
                    d="M460 239L460 184"
                    stroke="var(--accents-8)"
                    strokeOpacity="0.1"
                    {...lineAnimation}
                    animate={{
                        ...lineAnimation.animate,
                        scale: -1
                    }}
                    transition={{
                        delay: 1
                    }}
                />
                <motion.path
                    d="M484 96L484 24C484 21.7909 485.791 20 488 20L554 20"
                    stroke="url(#paint2_linear_341_27683)"
                    strokeOpacity="0.1"
                    {...lineAnimation}
                    transition={{
                        delay: 1
                    }}
                />
                <motion.path
                    d="M484 184L484 210C484 212.209 485.791 214 488 214L560 214"
                    stroke="var(--accents-8)"
                    strokeOpacity="0.1"
                    {...lineAnimation}
                    transition={{
                        delay: 1
                    }}
                />
                <motion.path
                    d="M508 184L508 193C508 195.209 509.791 197 512 197L560 197"
                    stroke="var(--accents-8)"
                    strokeOpacity="0.1"
                    {...lineAnimation}
                    transition={{
                        delay: 1
                    }}
                />
                <motion.circle
                    {...circleAnimation}
                    cx="460"
                    cy="64"
                    fill="var(--geist-background)"
                    r="4"
                />
                <motion.circle
                    {...circleAnimation}
                    cx="460"
                    cy="64"
                    r="3.5"
                    stroke="var(--accents-8)"
                    strokeOpacity="0.1"
                />
                <motion.circle
                    {...circleAnimation}
                    cx="308"
                    cy="64"
                    fill="var(--geist-background)"
                    r="4"
                />
                <motion.circle
                    {...circleAnimation}
                    cx="308"
                    cy="64"
                    r="3.5"
                    stroke="var(--accents-8)"
                    strokeOpacity="0.1"
                />
                <motion.circle
                    {...circleAnimation}
                    cx="69"
                    cy="173"
                    fill="var(--geist-background)"
                    r="4"
                />
                <motion.circle
                    {...circleAnimation}
                    cx="69"
                    cy="173"
                    r="3.5"
                    stroke="var(--accents-8)"
                    strokeOpacity="0.1"
                />
                <motion.circle
                    {...circleAnimation}
                    cx="436"
                    cy="214"
                    fill="var(--geist-background)"
                    r="4"
                />
                <motion.circle
                    {...circleAnimation}
                    cx="436"
                    cy="214"
                    r="3.5"
                    stroke="var(--accents-8)"
                    strokeOpacity="0.1"
                />
                <motion.circle
                    {...circleAnimation}
                    cx="460"
                    cy="240"
                    fill="var(--geist-background)"
                    r="4"
                />
                <motion.circle
                    {...circleAnimation}
                    cx="460"
                    cy="240"
                    r="3.5"
                    stroke="var(--accents-8)"
                    strokeOpacity="0.1"
                />
                <motion.circle
                    {...circleAnimation}
                    cx="560"
                    cy="214"
                    fill="var(--geist-background)"
                    r="4"
                />
                <motion.circle
                    {...circleAnimation}
                    cx="560"
                    cy="214"
                    r="3.5"
                    stroke="var(--accents-8)"
                    strokeOpacity="0.1"
                />
                <motion.circle
                    {...circleAnimation}
                    cx="560"
                    cy="197"
                    fill="var(--geist-background)"
                    r="4"
                />
                <motion.circle
                    {...circleAnimation}
                    cx="560"
                    cy="197"
                    r="3.5"
                    stroke="var(--accents-8)"
                    strokeOpacity="0.1"
                />
                <defs>
                    <linearGradient
                        gradientUnits="userSpaceOnUse"
                        id="paint0_linear_341_27683"
                        x1="412.5"
                        x2="412.5"
                        y1="-3.27835e-08"
                        y2="96"
                    >
                        <stop stopOpacity="0" />
                        <stop offset="1" />
                    </linearGradient>
                    <linearGradient
                        gradientUnits="userSpaceOnUse"
                        id="paint1_linear_341_27683"
                        x1="436.5"
                        x2="436.5"
                        y1="-3.27835e-08"
                        y2="96"
                    >
                        <stop stopOpacity="0" />
                        <stop offset="1" />
                    </linearGradient>
                    <linearGradient
                        gradientUnits="userSpaceOnUse"
                        id="paint2_linear_341_27683"
                        x1="554"
                        x2="484"
                        y1="20"
                        y2="96"
                    >
                        <stop stopOpacity="0" />
                        <stop offset="1" />
                    </linearGradient>
                    <AnimatedGradient
                        animate={{
                            x1: [83, 400],
                            x2: [83, 350],
                            y1: [320, 83],
                            y2: [415, 133.75]
                        }}
                        id="blue-pulse-1"
                        transition={{
                            duration: 2.2,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatDelay: 1.4,
                            delay: 0.5
                        }}
                    >
                        <stop stopColor="#2EB9DF" stopOpacity="0" />
                        <stop offset="0.05" stopColor="#2EB9DF" />
                        <stop offset="1" stopColor="#2EB9DF" stopOpacity="0" />
                    </AnimatedGradient>
                    <AnimatedGradient
                        animate={{
                            x1: [83, 400],
                            x2: [83, 350],
                            y1: [267.5, 83],
                            y2: [300, 133.75]
                        }}
                        id="blue-pulse-2"
                        transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatDelay: 1.2
                        }}
                    >
                        <stop stopColor="#2EB9DF" stopOpacity="0" />
                        <stop offset="0.05" stopColor="#2EB9DF" />
                        <stop offset="1" stopColor="#2EB9DF" stopOpacity="0" />
                    </AnimatedGradient>
                    <AnimatedGradient
                        animate={{
                            x1: [412, 400],
                            y1: [264, 83],
                            x2: [412, 350],
                            y2: [304, 133.75]
                        }}
                        id="pink-pulse-1"
                        transition={{
                            duration: 0.9,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatDelay: 1.9,
                            delay: 0.3
                        }}
                    >
                        <stop stopColor="#FF4A81" stopOpacity="0" />
                        <stop offset="0.030" stopColor="#FF4A81" />
                        <stop offset="0.27" stopColor="#DF6CF6" />
                        <stop offset="1" stopColor="#0196FF" stopOpacity="0" />
                    </AnimatedGradient>
                    <AnimatedGradient
                        animate={{
                            x1: [490, 490, 480, 478, 475],
                            x2: [490, 479, 488],
                            y1: [266, 120],
                            y2: [284, 150]
                        }}
                        id="pink-pulse-2"
                        transition={{
                            duration: 2.2,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatDelay: 1.8,
                            delay: 0.5
                        }}
                    >
                        <stop stopColor="#FF4A81" stopOpacity="0" />
                        <stop offset="0.0564843" stopColor="#FF4A81" />
                        <stop offset="0.4616" stopColor="#DF6CF6" />
                        <stop offset="1" stopColor="#0196FF" stopOpacity="0" />
                    </AnimatedGradient>
                    <AnimatedGradient
                        animate={{
                            x1: [826, 360],
                            x2: [826, 400],
                            y1: [270, 130],
                            y2: [340, 170]
                        }}
                        id="orange-pulse-1"
                        transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatDelay: 1.8,
                            delay: 0.6
                        }}
                    >
                        <stop stopColor="#FF7432" stopOpacity="0" />
                        <stop offset="0.0550784" stopColor="#FF7432" />
                        <stop offset="0.373284" stopColor="#F7CC4B" />
                        <stop offset="1" stopColor="#F7CC4B" stopOpacity="0" />
                    </AnimatedGradient>
                    <AnimatedGradient
                        animate={{
                            x1: [868, 300],
                            x2: [868, 400],
                            y1: [280, 140],
                            y2: [440, 180]
                        }}
                        id="orange-pulse-2"
                        transition={{
                            duration: 2.5,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatDelay: 2,
                            delay: 0.9
                        }}
                    >
                        <stop stopColor="#FF7432" stopOpacity="0" />
                        <stop offset="0.0531089" stopColor="#FF7432" />
                        <stop offset="0.415114" stopColor="#F7CC4B" />
                        <stop offset="1" stopColor="#F7CC4B" stopOpacity="0" />
                    </AnimatedGradient>
                </defs>
            </svg>
        </AnimatedLinesContext.Provider>
    );
}
