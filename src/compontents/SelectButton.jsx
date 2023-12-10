/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from "react";
import { round2 } from "../round";

export default function SelectButton({ changeOpposite, active, setActive, oppositeActive, value, convert, side }) {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", checkIfClickedOutside);
    return () => {
      document.removeEventListener("click", checkIfClickedOutside);
    };
  }, [setOpen]);

  const clickHandle = () => {
    setOpen(!isOpen);
  };

  const handleSelect = async (e) => {
    console.log(e.target.textContent)
    setActive(e.target.textContent);
    
    if (value === '' || side === 'right') return;
  
    const result = await convert(value, e.target.textContent, oppositeActive);
    changeOpposite(round2(result));
  };

  const menuClass = `drop-down-list ${isOpen ? "active" : ""}`;

  return (
    <div className='drop-down' ref={ref}>
      <button className='chronicle-button' onClick={clickHandle}>
        <span>
          <em>{active}</em>
        </span>
        <span>
          <em>{active}</em>
        </span>
      </button>
      <ul className={menuClass}>
        <li onClick={handleSelect}>RUB</li>
        <li onClick={handleSelect}>BYN</li>
        <li onClick={handleSelect}>EUR</li>
        <li onClick={handleSelect}>USD</li>
        <li onClick={handleSelect}>ARS</li>
        <li onClick={handleSelect}>TRY</li>
      </ul>
    </div>
  );
}
