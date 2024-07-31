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
const Choice = ({ choice, onAddChoice,onRemoveChoice,color,isSelected }:ChoiceProps) => {
    // const [isClicked, setIsClicked] = useState(false);
    const handleClick = (choice:string)=> () => {
        if(isSelected){
            onRemoveChoice(choice);
        }
        else{
            onAddChoice(choice);
        }
    }
    return (
        <div style={{ color: color }} className={clsx(styles.box,{[styles.colored]:isSelected})} onClick={handleClick(choice)}>{choice}</div>
    );
}
export default Choice;