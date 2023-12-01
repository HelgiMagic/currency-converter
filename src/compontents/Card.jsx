// eslint-disable-next-line react/prop-types
export default function Card({ color }) {
  const className = 'card ' + color;

  return (
    <div className={className}>
      <p className="card__text">1 EUR</p>
      <p>equals equals equals equals equals equals equals equals equals equals equals equals</p>
      <p className="card__text">90 RUB</p>
    </div>
  );
}