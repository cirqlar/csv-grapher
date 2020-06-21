import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';

import FileSelector from "./fileSelector/FileSelector";
import Graph from './graph/Graph';

function App() {
  const data = useSelector((state) => state.data, shallowEqual);

  return (
    <>
      <FileSelector />
      { data && <Graph /> }
    </>
  )
}

export default App;