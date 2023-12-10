import { useTranslation } from "react-i18next";
import Converter from "./Converter";
import Card from "./Card";
import { useEffect, useState } from "react";
import axios from "axios";
import routes from "../routes";
import { round1, round2 } from "../round";


export default function MainPage() {
  const { t, i18n } = useTranslation();
  const [USDRUB, setUSDRUB] = useState(90);
  const [EURRUB, setEURRUB] = useState(90);
  const [BYNRUB, setBYNRUB] = useState(90);
  const [ARSRUB, setARSRUB] = useState(90);
  const [TRYRUB, setTRYRUB] = useState(90);

  const handleLangSwitch = () => {
    i18n.changeLanguage(t('oppositeLang'));
  };

  const handleThemeChange = () => {
    const theme = document.body.getAttribute('data-theme');
    if (theme === 'dark') document.body.setAttribute('data-theme', 'light');
    else document.body.setAttribute('data-theme', 'dark');
  };

  useEffect(() => {
    const setData = async () => {
      const response = await axios.get(routes.getList());
      const { ARS, BYN, EUR, TRY, USD } = response.data.conversion_rates;

      setUSDRUB(round1(1 / USD));
      setEURRUB(round1(1 / EUR));
      setBYNRUB(round1(1 / BYN));
      setARSRUB(round2(1 / ARS));
      setTRYRUB(round2(1 / TRY));
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
          <Card name='USD'>{USDRUB}</Card>
          <Card name='EUR'>{EURRUB}</Card>
          <Card name='BYN'>{BYNRUB}</Card>
          <Card name='ARS'>{ARSRUB}</Card>
          <Card name='TRY'>{TRYRUB}</Card>
        </div>
        <div className="changes">
          <button className="theme-button" onClick={handleThemeChange}>{t('changeTheme')}</button>
          <button className="theme-button" onClick={handleLangSwitch}>{t('changeLang')}</button>
        </div>
      </div>
    </>
  );
}
