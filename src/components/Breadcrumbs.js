import React from 'react'
import Breadcrumb from './Breadcrumb';
import './Breadcrumbs.css';

export default function Breadcrumbs({ path = [], displayDirectory }) {
  return (
    <div className="Breadcrumbs">
      {path.map(({ id, name }, index) => 
        <Breadcrumb 
          key={`path-${id}`} 
          id={id} 
          name={name}
          displayDirectory={path.length - 1 > index && displayDirectory}
        />
      )}
    </div>
  )
}
