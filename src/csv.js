import Papa from 'papaparse';

async function papaPromise(file, config) {
  return new Promise((resolve, reject) => {
    Papa.parse(file, {
      complete: resolve,
      ...config
    });
  });
}

export async function parse(file, config) {
  const results = await papaPromise(file, config);
  const data = results.data;
  const fields = results.meta.fields;

  const formattedResults = {};

  for (let i = 0; i < data.length; ++i) {
    for (let j = 0; j < fields.length; ++j) {
      if (i === 0) {
        formattedResults[fields[j]] = [ data[i][fields[j]] ]
      }
      formattedResults[fields[j]].push(data[i][fields[j]]);
    }
  }

  return formattedResults;
}
