import React from 'react';

function GraphPage(props) {
  return (
    <>
      <button onClick={props.clearData}>Clear Data</button>
      <pre>{ JSON.stringify(props.data, null, 2) }</pre>
    </>
  );
}

export default GraphPage;