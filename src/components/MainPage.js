// src/components/MainPage.js

import React, { useState } from 'react';
import './MainPage.css';

const MainPage = () => {
  const [keyword, setKeyword] = useState('');
  const [data, setData] = useState([
    { id: 1, name: 'Banana' },
    { id: 2, name: 'Apple' },
    { id: 3, name: 'Orange' },
    { id: 4, name: 'Mango' },
    { id: 5, name: 'Grapes' },
    { id: 6, name: 'Strawberry' },
    { id: 7, name: 'Blueberry' },
    { id: 8, name: 'Pineapple' },
    { id: 9, name: 'Watermelon' },
    { id: 10, name: 'Kiwi' }
  ]);

  const handleInputChange = (event) => {
    setKeyword(event.target.value);
  };

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <div className="main-page">
      <input
        type="text"
        className="search-bar"
        placeholder="Masukan Keyword"
        value={keyword}
        onChange={handleInputChange}
      />
      <div className="content">
        <h3>List Data</h3>
        <ul>
          {filteredData.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MainPage;
