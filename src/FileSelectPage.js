import React from 'react';

function FileSelectPage(props) {
  const fileInput = React.useRef();

	return (
		<form>
      <input 
        type='file' 
        ref={fileInput} 
        accept=".csv,.txt" 
        onChange={() => props.setFile(fileInput.current.files[0])}
      />
    </form>
	);
}

export default FileSelectPage;