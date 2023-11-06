import { FC, useState } from 'react';
import logo from '../../assets/logo.gif';

import './Header.css';

interface IHeader {
  setQuery: (value: string) => void;
  setLimit: (value: number) => void;
}

const Header: FC<IHeader> = ({ setQuery, setLimit }) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <header className="header">
      <div className="header__select-wrap">
        <span>Gifs per page:</span>
        <select
          className="header__select"
          onChange={(e) => setLimit(Number(e.target.value))}
        >
          <option value={10}>10</option>
          <option value={25} selected>
            25
          </option>
          <option value={50}>50</option>
        </select>
      </div>
      <div className="header__logo">
        <img src={logo} className="header__logo-img" />
        <span className="header__logo-text">/mirror/</span>
      </div>
      <div className="header__search-wrap">
        <span className="header__desc">Let&#39;s find funny gifs!</span>
        <div className="header__search">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="header__input"
            placeholder="Enter your query here"
          />
          <button
            className="button header__button"
            onClick={() => setQuery(inputValue)}
          >
            Search
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
