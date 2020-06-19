import React from 'react';
import Graph from './Graph';

function GraphPage(props) {
  return (
    <>
      <button onClick={props.clearData}>Clear Data</button>
      <Graph data={props.data} />
    </>
  );
}

export default GraphPage;