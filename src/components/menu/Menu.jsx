import React, {useState, useEffect, useRef} from "react"
import "./Menu.css"

function Menu({header, side, items}) {
  const [menuOn, setMenuOn] = useState(false)
  const menuRef = useRef();

  const setMenuOffOnClick = (e) => {
    // Checks that menuRef exists, otherwise it wouldn't be necessary the checking.
    // Then checks that clicked element currently exist before treating it as and outside element.
    if (menuRef.current && document.contains(e.target)) {
      if (!menuRef.current.contains(e.target)) {
        setMenuOn(false)
     }
   }
 }

  useEffect(() => {
    // Add event callback to manage click events like click outside a specific element
    window.addEventListener("click", setMenuOffOnClick)

    return () => {
      window.removeEventListener("click", setMenuOffOnClick)  
   }
 }, [])
  
  return (
    <div className="menu" ref={menuRef}>
      <div className="menu__header" onClick={() => setMenuOn(!menuOn)}>
        <div className="menu__header__title">
          {header && (<p>{header}</p>)} 
        </div>
        <div className="menu__header__side">
          <img src={side} alt="" />
        </div>
      </div>
      {
        menuOn && (
          <div className="menu__body">
            {
              items.map((item, index) => (
                //TODO: Replace the key assignment technique, for a correct one, though it doesn't have a big impact on performance, in this case.
                <div key={index} className="menu__body__item">
                  {item}
                </div> 
              ))
           } 
          </div>
          )
     }
    </div>
  )
}

export default Menu