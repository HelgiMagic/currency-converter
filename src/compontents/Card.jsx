/* eslint-disable react/prop-types */
import { useTranslation } from "react-i18next";

export default function Card({ color, children }) {
  const { t } = useTranslation();
  const className = 'card ' + color;
  console.log(children)

  return (
    <div className={className}>
      <p className="card__text">1 EUR</p>
      <p>{t('manyEquals')}</p>
      <p className="card__text">{children} RUB</p>
    </div>
  );
}