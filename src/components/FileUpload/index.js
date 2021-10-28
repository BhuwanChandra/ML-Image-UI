import React, { useState } from "react";
import { Container } from 'react-bootstrap';
import Dropzone from "react-dropzone";
import UploadIcon from "../../images/upload_icon.png";

import "./index.css";

function FileUpload() {
  const [allFiles, setAllFiles] = useState({
    selectedFiles: 0,
    currentFiles: undefined,
    progress: 0,
    message: "",
    fileInfos: [],
  });

  const onDrop = (files) => {
    if (files.length > 0) {
      setAllFiles({ selectedFiles: files });
    }
  }

  return (
    <Container>
      <Dropzone onDrop={onDrop} multiple={false} accept=".jpg,.jpeg,.png,.webp">
        {({ getRootProps, getInputProps }) => (
          <section>
            <div {...getRootProps({ className: "dropzone" })}>
              <input {...getInputProps()} />
              {allFiles.selectedFiles && allFiles.selectedFiles[0].name ? (
                <div className="selected-file">
                  {allFiles.selectedFiles && allFiles.selectedFiles[0].name}
                </div>
              ) : (
                <div>
                  <img src={UploadIcon} alt="upload icon" />
                  <br />
                  <p className="mt-2">Drag and drop, or click to select an image</p>
                </div>
              )}
            </div>
          </section>
        )}
      </Dropzone>
    </Container>
  );
}

export default FileUpload;
