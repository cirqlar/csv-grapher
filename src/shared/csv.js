import React from 'react';
import Papa from 'papaparse';

async function papaPromise(file, config) {
  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      complete: resolve,
      ...config
    });
  });
}

export function isEmpty(obj) {
  for(var key in obj) {
      if(obj.hasOwnProperty(key))
          return false;
  }
  return true;
}

export async function parse(file, config) {
  let { shared: { header, labels } } = config;
  let pConfig = { ...config.parse, header };
  const results = await papaPromise(file, pConfig);
  const data = results.data;
  const fields = (header) ? results.meta.fields : data[0].map((v, index) => index );

  const formattedResults = {
    '_labels': [],
  };

  for (let i = 0; i < data.length - 1; i++) {
    for (let j = 0; j < fields.length; j++) {
      if (labels) {
        if (i === 0 && j !== 0) {
          formattedResults[fields[j]] = [ data[i][fields[j]] ];
          continue;
        }
        if (j === 0) {
          formattedResults['_labels'].push(data[i][fields[j]]);
          continue;
        }
        if (i !== 0 && j !== 0) {
          formattedResults[fields[j]].push(data[i][fields[j]]);
        }
      } else {
        if (i === 0) {
          formattedResults[fields[j]] = [ data[i][fields[j]] ];
          continue;
        } else {
          formattedResults[fields[j]].push(data[i][fields[j]]);
        }
      }
    }
  }
  
  formattedResults['_keys'] = fields.splice(1);

  return formattedResults;
}

export function useCSVParser() {
  console.log("Called");
  const [config, setConfig] = React.useState();
  const [data, setData] = React.useState();

  function set({...args} = {}) {
    if (isEmpty(args)) {
      setData(null);
    } else {
      setConfig(args);
    }
  }

  React.useEffect(() => {
    if (config && config.file) {
      debugger;
      let { file, ...conf} = config;
      parse(file, { header: true, dynamicTyping: true, ...conf })
        .then(results => {
          setData(results);
        })
    }
  }, [config]);

  return [data, set];
}