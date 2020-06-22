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
      <h1>
        CSV Grapher
        {" "}<br />
        <small>by <a href="http://www.github.com/cirqlar">cirqlar</a></small>
      </h1>
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
          onChange={() => { setFile(fileInput.current.files[0]); setChanged(true) } }
        />
        <div className={styles.config}>
          {/* <div className={styles.checkbox}> */}
            <input
              type="checkbox"
              id="header"
              checked={header}
              onChange={e => { setHeader(e.target.checked); setChanged(true) }}
            />
            <label htmlFor="header" className={styles.checkbox}>Header</label>
          {/* </div>
          <div className={styles.checkbox}> */}
            <input
              type="checkbox"
              id="labels"
              checked={labels}
              onChange={e => { setLabels(e.target.checked); setChanged(true) }}
            />
            <label htmlFor="labels" className={styles.checkbox}>Labels</label>
          {/* </div> */}
        </div>
        <button 
          type="submit" 
          className={`${styles.buttonForm} ${styles.buttonSubmit}`}
          disabled={(!file || !changed)}
        >Submit</button>
        <button 
          type="reset"
          onClick={() => {
            form.current.reset();
            setFile();
            updateConfig({ changed: true, file: null });
          }}
          disabled={(!data && !file)}
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