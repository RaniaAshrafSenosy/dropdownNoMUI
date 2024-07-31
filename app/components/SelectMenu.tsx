"use client";
import { useState } from 'react';
import styles from './SelectMenu.module.scss'
import Choice from './Choice';

type SelectMenuProps = {
     choices:string[];
     colors : string[];
     multiple?: boolean;
}
const SelectMenu=({choices,colors,multiple}:SelectMenuProps)=>{

    const [currCohice,setCurrChoice]=useState<string[]>([]);
    const [showMenu,setShowMenu]=useState(false);
    const[isFocused,setIsFocused]=useState(false);
    const handleClick=()=>{
        setShowMenu(!showMenu);
        setIsFocused(!isFocused);
    }
    const handleAddChoice=(choice:string)=>{
        if(!multiple){
            setCurrChoice([choice]);
            return;
        }
        setCurrChoice([...currCohice,choice]);
    }
    const handleRemoveChoice=(choice:string)=>{
        const newChoices=currCohice.filter((item)=>item!==choice);
        setCurrChoice(newChoices);
    }
// if(!multiple||!choices||colors) return <p>loading</p>
    return(
    <div className={styles.box}>
        <div className={`${styles.container} ${isFocused ? styles.focused : ''}`} onClick={handleClick} >
            <div className={styles.text}>

            {currCohice.length===0?'Select a day...':currCohice.join(', ')}
            </div>
            
        </div>
        <div>
        {showMenu && (
            <div className={styles.menu}>

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