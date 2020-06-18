import React from 'react';

import FileSelectPage from "./FileSelectPage";
import GraphPage from './GraphPage';
import * as csv from './csv';

function App() {
  const [file, setFile] = React.useState();
  const [data, setData] = React.useState();

  React.useEffect(() => {
    if (file) {
      csv.parse(file, { header: true, dynamicTyping: true })
        .then(results => {
          setData(results);
        })
    }
  }, [file]);

  function clearData() {
    setData(null);
  }

  React.useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    data ? <GraphPage data={data} clearData={clearData} /> : <FileSelectPage setFile={setFile} />
  )
}

export default App;