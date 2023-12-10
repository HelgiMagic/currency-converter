/* eslint-disable react/prop-types */
import { useTranslation } from "react-i18next";

export default function Card({ children, name }) {
  const { t } = useTranslation();

  return (
    <div className='card'>
      <p className="card__text">1 { name }</p>
      <p>{t('manyEquals')}</p>
      <p className="card__text">{children} RUB</p>
    </div>
  );
}