import React from 'react';
import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import Card from '../Pages/OfficeBearer/Card';
import { COLORS } from '../utils/colors';

const AnimatedItem = ({ children, delay = 0, index, onMouseEnter, onClick }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { amount: 0.5, triggerOnce: false });
    return (
        <motion.div
            ref={ref}
            data-index={index}
            onMouseEnter={onMouseEnter}
            onClick={onClick}
            initial={{ scale: 0.7, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.7, opacity: 0 }}
            transition={{ duration: 0.2, delay }}
            className="mb-4 cursor-pointer"
        >
            {children}
        </motion.div>
    );
};

const AnimatedList = ({
    items = [],
    onItemSelect,
    showGradients = true,
    enableArrowNavigation = true,
    className = '',
    displayScrollbar = true,
    initialSelectedIndex = -1,
    // NEW: Accept a custom render function
    renderItem = null, 
}) => {
    const listRef = useRef(null);
    const [selectedIndex, setSelectedIndex] = useState(initialSelectedIndex);
    const [keyboardNav, setKeyboardNav] = useState(false);
    const [topGradientOpacity, setTopGradientOpacity] = useState(0);
    const [bottomGradientOpacity, setBottomGradientOpacity] = useState(1);

    const handleScroll = (e) => {
        const { scrollTop, scrollHeight, clientHeight } = e.target;
        setTopGradientOpacity(Math.min(scrollTop / 50, 1));
        const bottomDistance = scrollHeight - (scrollTop + clientHeight);
        setBottomGradientOpacity(
            scrollHeight <= clientHeight ? 0 : Math.min(bottomDistance / 50, 1)
        );
    };

    useEffect(() => {
        if (!enableArrowNavigation) return;
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowDown' || (e.key === 'Tab' && !e.shiftKey)) {
                e.preventDefault();
                setKeyboardNav(true);
                setSelectedIndex((prev) => Math.min(prev + 1, items.length - 1));
            } else if (e.key === 'ArrowUp' || (e.key === 'Tab' && e.shiftKey)) {
                e.preventDefault();
                setKeyboardNav(true);
                setSelectedIndex((prev) => Math.max(prev - 1, 0));
            } else if (e.key === 'Enter') {
                if (selectedIndex >= 0 && selectedIndex < items.length) {
                    e.preventDefault();
                    if (onItemSelect) {
                        onItemSelect(items[selectedIndex], selectedIndex);
                    }
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [items, selectedIndex, onItemSelect, enableArrowNavigation]);

    useEffect(() => {
        if (!keyboardNav || selectedIndex < 0 || !listRef.current) return;
        const container = listRef.current;
        const selectedItem = container.querySelector(`[data-index="${selectedIndex}"]`);
        if (selectedItem) {
            const extraMargin = 50;
            const containerScrollTop = container.scrollTop;
            const containerHeight = container.clientHeight;
            const itemTop = selectedItem.offsetTop;
            const itemBottom = itemTop + selectedItem.offsetHeight;
            if (itemTop < containerScrollTop + extraMargin) {
                container.scrollTo({ top: itemTop - extraMargin, behavior: 'smooth' });
            } else if (itemBottom > containerScrollTop + containerHeight - extraMargin) {
                container.scrollTo({
                    top: itemBottom - containerHeight + extraMargin,
                    behavior: 'smooth',
                });
            }
        }
        setKeyboardNav(false);
    }, [selectedIndex, keyboardNav]);

    return (
        <div className={`relative w-full ${className}`}>
            <div
                ref={listRef}
                className={`max-h-[800px] overflow-y-auto p-4 custom-scrollbar`}
                onScroll={handleScroll}
                style={{
                    scrollbarWidth: displayScrollbar ? "thin" : "none",
                    scrollbarColor: `${COLORS.primary} ${COLORS.border}`,
                }}
            >
                <style>{`
                    .custom-scrollbar::-webkit-scrollbar {
                        width: 8px;
                        display: ${displayScrollbar ? 'block' : 'none'};
                    }
                    .custom-scrollbar::-webkit-scrollbar-track {
                        background: ${COLORS.border};
                        border-radius: 4px;
                    }
                    .custom-scrollbar::-webkit-scrollbar-thumb {
                        background: ${COLORS.primary};
                        border-radius: 4px;
                    }
                    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                        background: ${COLORS.primaryHover};
                    }
                `}</style>

                {items.map((item, index) => (
                    <AnimatedItem
                        key={index}
                        delay={0.1}
                        index={index}
                        onMouseEnter={() => setSelectedIndex(index)}
                        onClick={() => {
                            setSelectedIndex(index);
                            if (onItemSelect) {
                                onItemSelect(item, index);
                            }
                        }}
                    >
                        {/* LOGIC CHANGE: 
                           If renderItem is provided (Reviewers), use it.
                           Otherwise, use the default Card (OfficeBearers).
                        */}
                        {renderItem ? renderItem(item, index) : (
                            <Card
                                image={item.image}
                                designation={item.designation}
                                name={item.name}
                                college={item.college}
                                address={item.address}
                            />
                        )}
                    </AnimatedItem>
                ))}
            </div>
            
            {showGradients && (
                <>
                    <div
                        className="absolute top-0 left-0 right-0 h-[50px] pointer-events-none transition-opacity duration-300 ease"
                        style={{ 
                            opacity: topGradientOpacity,
                            background: `linear-gradient(to bottom, ${COLORS.background}, transparent)`
                        }}
                    ></div>
                    <div
                        className="absolute bottom-0 left-0 right-0 h-[50px] pointer-events-none transition-opacity duration-300 ease"
                        style={{ 
                            opacity: bottomGradientOpacity,
                            background: `linear-gradient(to top, ${COLORS.background}, transparent)`
                        }}
                    ></div>
                </>
            )}
        </div>
    );
};

export default AnimatedList;