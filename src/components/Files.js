import React from 'react'
import File from './File';
import './Files.css';

export default function Files({ directory = {}, displayDirectory}) {
  const { directories = [], files = [] } = directory;
  return (
    <div className="Files">
      {directories.map(({ id, name }) => 
        <File 
          key={`dir-${id}`} 
          id={id} 
          name={name} 
          type="directory" 
          displayDirectory={displayDirectory} 
        />
      )}
      {files.map(({ name }, index) =>
        <File
          key={`file-${index}`}
          name={name}
          type={name.split('.')[name.split('.').length-1] === 'jpg' ? 'image' : 'generic'}
        />
      )}
    </div>
  )
}
