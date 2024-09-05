import React,{useState} from 'react';

const Question = ({info,title}) => {
    const[open,setOpen]=useState(false);

    return (
        <section>
           <div> 
            <h4>{title}</h4>
            <button onClick={()=>setOpen(!open)}>{!open ? "-": "+"}</button>    
           </div>
           {
            !open && <p>{info}</p>

           } 
           
        </section>
        
    );
};

export default Question;