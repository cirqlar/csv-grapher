import React from 'react';
import { connect } from 'react-redux';

import { updateConfig } from '../store/actions/actions';
import styles from '../css/fileSelect.module.css';

function trunc(string, len) {
  if (string.length > len) {
    return [...string].splice(0, len-3).join('').concat('...');
  } else {
    return string;
  }
}


function FileSelector({ data, config: { parse, chart, shared }, updateConfig }) {
  const fileInput = React.useRef();
  const form = React.useRef();

  const [header, setHeader] = React.useState(shared.header);
  const [labels, setLabels] = React.useState(shared.labels);
  const [changed, setChanged] = React.useState(false);
  const [file, setFile] = React.useState();

  const handleSubmit = () => {
    const payload = {
      file,
      changed,
      config: {
        shared: {
          header,
          labels,
        }        
      }
    }
    updateConfig(payload);
    setChanged(false);
  }


	return (
    <div className={styles.container + " " + ((!data) ? "" : styles.containerClosed)}>
      <h1>CSV Grapher</h1>
      <form onSubmit={e => {
        e.preventDefault();
        handleSubmit();
      }} className={styles.form} ref={form} >
        <label 
          htmlFor='file' 
          className={styles.fileLabel}
          title={ (data || (file && changed)) ? file.name : "Select File" }
        >
          { (data || (file && changed)) ? trunc(file.name, (data ? 10 : 20)) : "Select File" }
        </label>
        <input 
          type='file' 
          id='file'
          ref={fileInput} 
          accept=".csv,.txt" 
          style={{ display: "none" }}
          onClick={() => console.log("File clicked") }
          onChange={() => { setFile(fileInput.current.files[0]); setChanged(true) } }
        />
        <label htmlFor="header" className={styles.checkbox}>Header
          <input
            type="checkbox"
            id="header"
            checked={header}
            onChange={e => { setHeader(e.target.checked); setChanged(true) }}
          />
        </label>
        <label htmlFor="labels" className={styles.checkbox}>Labels
          <input
            type="checkbox"
            id="labels"
            checked={labels}
            onChange={e => { setLabels(e.target.checked); setChanged(true) }}
          />
        </label>
        <button type="submit" className={`${styles.buttonForm} ${styles.buttonSubmit}`}>Submit</button>
        <button 
          onClick={() => {
            form.current.reset();
            updateConfig({ changed: true, file: null });
          }}
          className={`${styles.buttonForm} ${styles.buttonClear}`}
        >Clear</button>
      </form>
    </div>
	);
}

function mapStateToProps(state) {
  let { data, config } = state;
  return {
    data,
    config,
  }
}

export default connect(
  mapStateToProps,
  {
    updateConfig,
  },
)(FileSelector);