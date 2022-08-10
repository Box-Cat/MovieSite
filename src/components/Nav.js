import React, {useEffect, useState} from 'react'
import "./Nav.css"

export default function Nav() {
  const [show, setShow] = useState(false);

  useEffect(()=>{
    window.addEventListener("scroll", ()=>{
      if(window.scrollY>50){
        setShow(true);
      }else{
        setShow(false);
      }
    });
    
    return () =>{
      window.removeEventListener("scroll",()=>{});
    };
  }, [])

  return (
    <div className={`nav ${show && "nav__black"}`}>
        <img
            alt="Netflix logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/200px-Netflix_2015_logo.svg.png"
            className="nav__logo"
            onClick={()=>window.location.reload()}
        />
        <img
            alt="User logged"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvTTxf8kkhZHoIFtwb-zJSDmQAytBS4EiiE8d40C_W-_M_x4NdxLViFDrYlkC_unRBf5c&usqp=CAU"
            className='nav__avatar'
     />
    </div>

  )
}
