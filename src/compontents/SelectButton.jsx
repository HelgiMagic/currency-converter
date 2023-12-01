/* eslint-disable react/prop-types */

export default function SelectButton({ children }) {
  return (
    <button className='chronicle-button'>
          <span>
            <em>{ children }</em>
          </span>
          <span>
            <em>{ children }</em>
          </span>
        </button>
  );
}
