import React from 'react';
import { connect } from 'react-redux';

import { updateConfig } from './store/actions/actions'


function FileSelectPage({ config, updateConfig }) {
  const fileInput = React.useRef();

  const [header, setHeader] = React.useState(config.header);
  const [labels, setLabels] = React.useState(config.labels);
  const [changed, setChanged] = React.useState(false);
  const [file, setFile] = React.useState();

  const handleSubmit = () => {
    const payload = {
      file,
      changed,
      config: {
        header,
        labels,
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
      <input type="checkbox" name="header" checked={header} onChange={e => setHeader(e.target.checked)} />
      <input type="checkbox" name="labels" checked={labels} onChange={e => setLabels(e.target.checked)} />
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