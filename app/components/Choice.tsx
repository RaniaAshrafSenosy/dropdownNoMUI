import React, { useState } from "react";
import clsx from 'clsx';
import styles from './Choice.module.scss';
type ChoiceProps ={
    choice: string;
    onAddChoice: (choice:string) => void;
    onRemoveChoice: (choice:string) => void;
    color: string;
    isSelected: boolean;
}
const extractRgbFromRgba = (rgba: string): string => {
    const match = rgba.match(/^rgba\((\d+),\s*(\d+),\s*(\d+),\s*(\d+\.?\d*)\)$/);
    if (match) {
        return `${match[1]}, ${match[2]}, ${match[3]}`;
    }
    return ''; 
};



const changeAlpha = (color: string, alpha: number): string => {
    const rgb = extractRgbFromRgba(color);
    return `rgba(${rgb}, ${alpha})`;
};

const Choice = ({ choice, onAddChoice,onRemoveChoice,color,isSelected }:ChoiceProps) => {
    const [bgColor, setBgColor] = useState('');
    const handleClick = (choice: string) => () => {
        const newAlpha = isSelected ? 0 : 0.2; 
        if (isSelected) {
            onRemoveChoice(choice);
            setBgColor(changeAlpha(color, newAlpha)); 
            setTimeout(() => {
                setBgColor('');
            }, 150);
        } else {
            onAddChoice(choice);
            setBgColor(changeAlpha(color, newAlpha));
            setTimeout(() => {
                setBgColor('');
            }, 150);
        }
    }
    return (
        <div 
        style={{ backgroundColor: bgColor, color: color }}
        className={clsx(styles.box,{[styles.colored]:isSelected})} 
        onClick={handleClick(choice)}>
            {choice}
            </div>
    );
}
export default Choice;