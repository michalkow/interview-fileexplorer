import React from 'react';
import './Breadcrumb.css';

export default function Breadcrumb({ id, name, displayDirectory }) {
  const handleClick = () => {
    if (displayDirectory)
      displayDirectory(id);
  }
  return (
    <button className="Breadcrumb" disabled={!displayDirectory} onClick={handleClick}>
      <span>{name}</span>
    </button>
  );
}
