import SelectButton from "./SelectButton";
import routes from "../routes";
import axios from "axios";
import { useState } from "react";
import { round2 } from "../round";
import { useTranslation } from "react-i18next";
//import { useEffect } from "react";

const convert = async (quanity, from, to) => {
  const response = await axios.get(routes.convert(from, to));
  const rate = response.data.conversion_rates[to];
  
  return quanity * rate;
}

let timeout = null;

export default function Converter() {
  const { t } = useTranslation();
  const [left, setLeft] = useState('');
  const [right, setRight] = useState('');
  
  const [leftActive, setLeftActive] = useState('RUB');
  const [rightActive, setRightActive] = useState('USD');


  const handleLeft = async (e) => {
    setLeft(e.target.value);

    clearTimeout(timeout);

    // Make a new timeout set to go off in 1000ms (1 second)
    timeout = setTimeout(async () => {
        const result = await convert(e.target.value, leftActive, rightActive);
        setRight(round2(result));
        console.log(result);
    }, 1000);
  }

  const handleRight = (e) => {
    setRight(e.target.value);

    clearTimeout(timeout);

    // Make a new timeout set to go off in 1000ms (1 second)
    timeout = setTimeout(async () => {
        const result = await convert(e.target.value, rightActive, leftActive);
        setLeft(round2(result));
        console.log(result);
    }, 1000);
  }

  return (
    <div className='converter'>
      <h3>{t('convert')}</h3>
      <div className='converter-row'>
        <div className='converter-row__group'>
          <SelectButton changeOpposite={setRight} active={leftActive} setActive={setLeftActive} oppositeActive={rightActive} value={left} convert={convert}></SelectButton>
          <input type='text' className='input' onInput={handleLeft} value={left}/>
        </div>
        <h3>{t('to')}</h3>
        <div className='converter-row__group'>
          <input type='text' className='input' onInput={handleRight} value={right} />
          <SelectButton changeOpposite={setRight} active={rightActive} setActive={setRightActive} oppositeActive={leftActive} value={left} convert={convert}></SelectButton>
        </div>
      </div>
    </div>
  );
}

// из рубля в доллар евро турецкий аргентинский беларусский
