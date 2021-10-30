import React from "react";
import { Container } from 'react-bootstrap';
import Dropzone from "react-dropzone";
import UploadIcon from "../../images/upload_icon.png";

import "./index.css";

function FileUpload({ setFile, file }) {
  const onDrop = (files) => {
    if (files.length > 0) {
      setFile(files[0]);
    }
  }

  return (
    <Container>
      <Dropzone onDrop={onDrop} multiple={false} accept=".jpg,.jpeg,.png,.webp">
        {({ getRootProps, getInputProps }) => (
          <section>
            <div {...getRootProps({ className: "dropzone" })}>
              <div>
                <input {...getInputProps()} />
                {file && file.name ? (
                  <div className="selected-file">
                    {file.name}
                  </div>
                ) : (
                  <div>
                    <img src={UploadIcon} alt="upload icon" />
                    <br />
                    <p className="mt-2">
                      Drag and drop, or click to select an image
                    </p>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}
      </Dropzone>
    </Container>
  );
}

export default FileUpload;
