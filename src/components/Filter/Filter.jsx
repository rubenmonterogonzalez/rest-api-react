import React from "react";

const Filter = () => {
  return (
    <div>
      <div >
        <div>
          Africa
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M256 217.9L383 345c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.3-24.6 0-34L273 167c-9.1-9.1-23.7-9.3-33.1-.7L95 310.9c-4.7 4.7-7 10.9-7 17s2.3 12.3 7 17c9.4 9.4 24.6 9.4 33.9 0l127.1-127z"></path>
          </svg>
        </div>
        <ul >
          <li  value="Africa">
            Africa
          </li>
          <li  value="Americas">
            Americas
          </li>
          <li  value="Asia">
            Asia
          </li>
          <li  value="Europe">
            Europe
          </li>
          <li  value="Oceania">
            Oceania
          </li>
          <li  value="None">
            None
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Filter;
