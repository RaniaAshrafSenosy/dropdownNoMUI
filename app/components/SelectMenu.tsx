"use client";
import { useCallback, useEffect, useRef, useState } from 'react';
import styles from './SelectMenu.module.scss'
import Choice from './Choice';
import clsx from 'clsx';

type SelectMenuProps = {
     choices:string[];
     colors : string[];
     multiple?: boolean;
}
const SelectMenu=({choices,colors,multiple}:SelectMenuProps)=>{

    const [currCohice,setCurrChoice]=useState<string[]>([]);
    const [showMenu,setShowMenu]=useState(false);
    const[isFocused,setIsFocused]=useState(false);
    const [labelInFocus,setLabelInFocus]=useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const handleClick=()=>{
        setShowMenu(!showMenu);
        setIsFocused(!isFocused);
        setLabelInFocus(true);
    }
    const handleAddChoice=(choice:string)=>{
        if(!multiple){
            setCurrChoice([choice]);
            setShowMenu(false);
            return;
        }
        setCurrChoice([...currCohice,choice]);
    }
    const handleRemoveChoice=(choice:string)=>{
        const newChoices=currCohice.filter((item)=>item!==choice);
        setCurrChoice(newChoices);
        if(!multiple){
            setShowMenu(false);
        }
    }

    const handleClickOutside = useCallback((event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            console.log(showMenu)
            setShowMenu(false);
        }
    },[showMenu]);
    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [handleClickOutside]);
// if(!multiple||!choices||colors) return <p>loading</p>
    return(
    <div className={styles.box}>
  
       {multiple && <p>I&apos;m Dropdown Menu With multiple selections </p> }
       {!multiple && <p>I&apos;m Dropdown Menu With single selection </p> }
        <div 
          className={clsx(
            styles.container,
            { [styles.labelInFocus]: labelInFocus },
            { [styles.isFocused]: isFocused }
          )}
         onClick={handleClick} >
            <div className={styles.text}>

            {/* {currCohice.length===0?'Select a day...':       */}
          {  currCohice.join(', ')}
            {/* } */}
            </div>
            
        </div>
        <div>
        {showMenu && (
            <div ref={dropdownRef} className={styles.menu}>

                {choices.map((choice,index)=>(
              <Choice
                  isSelected={currCohice.includes(choice)}
                  onAddChoice={handleAddChoice}
                  onRemoveChoice={handleRemoveChoice}
                  choice={choice} 
                  color={colors[index%colors.length]}
                  key={index} />

                ))}
            </div>
        )}
      </div>
 </div>

    )

}
export default SelectMenu