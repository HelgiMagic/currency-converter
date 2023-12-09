import { useTranslation } from "react-i18next";
import Converter from "./Converter";
import Card from "./Card";
import { useEffect, useState } from "react";
import axios from "axios";
import routes from "../routes";
import { round1, round2 } from "../round";


export default function MainPage() {
  const { t } = useTranslation();
  const [USDRUB, setUSDRUB] = useState(90);
  const [EURRUB, setEURRUB] = useState(90);
  const [BYNRUB, setBYNRUB] = useState(90);
  const [ARSRUB, setARSRUB] = useState(90);
  const [TRYRUB, setTRYRUB] = useState(90);

  useEffect(() => {
    const setData = async () => {
      const response = await axios.get(routes.getList());
      const { ARS, BYN, EUR, TRY, USD } = response.data.data;
      setUSDRUB(round1(1 / USD.value));
      setEURRUB(round1(1 / EUR.value));
      setBYNRUB(round1(1 / BYN.value));
      setARSRUB(round2(1 / ARS.value));
      setTRYRUB(round2(1 / TRY.value));
    };
  
    setData();
    console.log('done!');
  }, []);

  return (
    <>
      <h1>{t("converter")}</h1>
      <div className='container'>
        <Converter />
        <div className='currencies'>
          <Card color='orange'>{USDRUB}</Card>
          <Card color='blue'>{EURRUB}</Card>
          <Card color='red'>{BYNRUB}</Card>
          <Card color='orange'>{ARSRUB}</Card>
          <Card color='blue'>{TRYRUB}</Card>
        </div>
      </div>
    </>
  );
}
