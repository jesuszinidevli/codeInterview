import React from 'react';

const ItemList = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
};

export default ItemList;
