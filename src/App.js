import React from 'react';

import FileSelectPage from "./FileSelectPage";
import GraphPage from './graph/GraphPage';
import { useCSVParser } from './shared/csv';

function App() {
  const [data, setData] = useCSVParser();

  React.useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    data ? <GraphPage data={data} clearData={() => setData()} /> : <FileSelectPage submit={setData} />
  )
}

export default App;