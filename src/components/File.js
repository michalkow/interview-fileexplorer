import React from 'react'
import folder from '../folder-24px.svg';
import image from '../image-24px.svg';
import file from '../insert_drive_file-24px.svg';
import './File.css';

function getSrcByType(type) {
  switch (type) {
    case 'directory':
      return folder;
    case 'image':
      return image;
    default:
      return file;
  }
}

export default function File({ id, name, type, displayDirectory }) {
  const handleClick = () => {
    if (displayDirectory)
      displayDirectory(id);
  }
  return (
    <button 
      className="File"
      disabled={!displayDirectory} 
      onClick={handleClick}
    >
      <img alt={type} src={getSrcByType(type)} />
      <span>{name}</span>
    </button>
  );
}
