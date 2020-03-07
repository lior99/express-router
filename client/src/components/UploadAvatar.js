import React, { useEffect, useRef } from 'react';

const UploadAvatar = () => {
  const browseFile = useRef();

  const uploadFile = event => {
    console.log('inside the upload file', event);
  };

  useEffect(() => {
    // setTimeout(() => {
    //   console.log('browseFile', browseFile);
    //   browseFile.click();
    // }, 3000);
  }, []);

  return (
    <div className="upload-container" style={{}}>
      <input type="file" onClick={uploadFile} ref={browseFile}></input>
    </div>
  );
};

export default UploadAvatar;
