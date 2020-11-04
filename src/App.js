import React, { useReducer, useState, useEffect } from 'react';
import Breadcrumbs from './components/Breadcrumbs';
import Files from './components/Files';
import { findDirectory } from './lib/api';
import { ROOT_ID, ROOT_NAME } from './lib/constants'
import './App.css';

const initialState = {
  path: [{ id: ROOT_ID, name: ROOT_NAME }],
  directories: {},
  directoryId: ROOT_ID
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'loadDirectory':
      let pathIndex = state.path.findIndex(({ id }) => id === action.directory.id);
      let path = pathIndex > -1 ? 
        state.path.slice(0, pathIndex + 1)
        : 
        [...state.path, { id: action.directory.id, name: action.directory.name }];
      let directories = Object.assign({}, state.directories, { [action.directory.id]: action.directory });
      return Object.assign({}, state, { path, directories, directoryId: action.directory.id});
    default:
      return state;
  }
}

function App() {
  const [{ path, directories, directoryId}, dispatch] = useReducer(reducer, initialState);
  const [isBusy, setBusy] = useState(false)

  const displayDirectory = (id) => {
    console.log(id);
    setBusy(true);
    findDirectory(id).then(directory => {
      console.log(directory); 
      dispatch({ type: 'loadDirectory', directory });
      setBusy(false);
    })
  };

  useEffect(() => {
    displayDirectory(ROOT_ID);
  }, [])

  return (
    <div className="App">
      <div className="App-busy">
        {isBusy && 'Loading ...'}
      </div>
      <Breadcrumbs 
        path={path} 
        displayDirectory={displayDirectory} 
      />
      <Files 
        directory={directories[directoryId]} 
        displayDirectory={displayDirectory} 
      />
    </div>
  );
}

export default App;
