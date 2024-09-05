import React,{useState} from 'react';

const Question = ({info,title}) => {
    const[open,setOpen]=useState(false);

    return (
        <section>
           <div className={!open ? "open":"closed"}> 
            <h4>{title}</h4>
            <button onClick={()=>setOpen(!open)}>{!open ? "-": "+"}</button>    
           </div>
           {
            !open && <p className={!open ? "open":"closed"}>{info}</p>

           } 
           
        </section>
        
    );
};

export default Question;