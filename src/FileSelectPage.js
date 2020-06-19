import React from 'react';

function FileSelectPage(props) {
  const fileInput = React.useRef();

  const [header, setHeader] = React.useState(false);
  const [file, setFile] = React.useState();


	return (
		<form onSubmit={e => {
      e.preventDefault();
      props.submit({
        header, file,
      });
    }}>
      <input type="checkbox" name="header" checked={header} onChange={e => setHeader(e.target.checked)} />
      <input 
        type='file' 
        ref={fileInput} 
        accept=".csv,.txt" 
        onChange={() => setFile(fileInput.current.files[0])}
      />
      <button type="submit" >Submit</button>
    </form>
	);
}

export default FileSelectPage;