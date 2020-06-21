import React from 'react';
import { connect } from 'react-redux';

import { updateConfig } from './store/actions/actions'


function FileSelectPage({ config: { parse, chart, shared }, updateConfig }) {
  const fileInput = React.useRef();

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
		<form onSubmit={e => {
      e.preventDefault();
      handleSubmit();
    }}>
      <label htmlFor="header" >Header</label>
      <input type="checkbox" name="header" checked={header} onChange={e => { setHeader(e.target.checked); setChanged(true) }} />
      <label htmlFor="labels" >Labels</label>
      <input type="checkbox" name="labels" checked={labels} onChange={e => { setLabels(e.target.checked); setChanged(true) }} />
      <input 
        type='file' 
        ref={fileInput} 
        accept=".csv,.txt" 
        onChange={() => { setFile(fileInput.current.files[0]); setChanged(true) } }
      />
      <button type="submit" >Submit</button>
    </form>
	);
}

function mapStateToProps(state) {
  let { file, config } = state;
  return {
    file,
    config,
  }
}

export default connect(
  mapStateToProps,
  {
    updateConfig,
  },
)(FileSelectPage);