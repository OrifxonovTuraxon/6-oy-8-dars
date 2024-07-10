import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import section1 from '../assets/section1.svg';

const items = [
    {
        img: section1
    },
    {
        img: section1
    },
    {
        img: section1
    },
    {
        img: section1
    },
    {
        img: section1
    }
];

function Slider() {
    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const handleIndicatorClick = (index) => {
        setActiveIndex(index);
    };

    return (
        <div className="flex flex-col items-center">
            <div className="relative w-full h-48 flex items-center justify-center">
                <IconButton
                    onClick={handlePrev}
                    className="absolute left-0 transform -translate-y-1/2 z-10"
                    style={{
                        borderRadius: '23px',
                        width: '42px',
                        height: '42px',
                        background: 'linear-gradient(270deg, rgba(77, 94, 246, 0.2) 0%, rgba(246, 77, 77, 0.2) 100%)',
                        marginLeft: '20px'
                    }}
                >
                    &lt;
                </IconButton>
                <TransitionGroup className="w-full h-full">
                    <CSSTransition
                        key={activeIndex}
                        timeout={500}
                        classNames="slide"
                    >
                        <img
                            src={items[activeIndex].img}
                            alt="Slider Image"
                            className="absolute w-full h-full object-cover"
                        />
                    </CSSTransition>
                </TransitionGroup>
                <IconButton
                    onClick={handleNext}
                    className="absolute right-0 transform -translate-y-1/2 z-10"
                    style={{
                        borderRadius: '23px',
                        width: '42px',
                        height: '42px',
                        background: 'linear-gradient(270deg, rgba(77, 94, 246, 0.2) 0%, rgba(246, 77, 77, 0.2) 100%)',
                        marginRight: '20px'
                    }}
                >
                    &gt;
                </IconButton>
            </div>
            <div className="flex space-x-4 mt-4">
                {items.map((item, index) => (
                    <svg
                        key={index}
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={() => handleIndicatorClick(index)}
                        className="cursor-pointer"
                    >
                        <circle
                            cx="8"
                            cy="8"
                            r="8"
                            fill={`url(#paint0_linear_${index})`}
                            fillOpacity={index === activeIndex ? "1" : "0.2"}
                        />
                        <defs>
                            <linearGradient
                                id={`paint0_linear_${index}`}
                                x1="16"
                                y1="8"
                                x2="0"
                                y2="8"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#4D5EF6" />
                                <stop offset="1" stopColor="#F64D4D" />
                            </linearGradient>
                        </defs>
                    </svg>
                ))}
            </div>
        </div>
    );
}

export default Slider;
