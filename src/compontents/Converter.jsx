import SelectButton from "./SelectButton";
import routes from "../routes";
import axios from "axios";
//import { useEffect } from "react";

const rates = {};

const func = async () => {
  const response = await axios.get(routes.getList());
  const { ARS, BYN, EUR, TRY, USD } = response.data.data;
  [ARS, BYN, EUR, TRY, USD].forEach((cur) => {
    rates[`RUB${cur.code}`] = cur.value;
    rates[`${cur.code}RUB`] = 1 / cur.value;
  });

  console.log(rates);
  console.log(response.data.data);
};

export default function Converter() {
  return (
    <div className='converter'>
      <h3>Перевести</h3>
      <div className='converter-row'>
        <SelectButton>RUB</SelectButton>
        <input type='text' className='input' />
        <h3>в</h3>
        <input type='text' className='input' />
        <SelectButton>USD</SelectButton>
      </div>
    </div>
  );
}

// из рубля в доллар евро турецкий аргентинский беларусский
