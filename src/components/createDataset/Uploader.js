import React, { useContext, useRef, useState, useEffect } from "react";

import { Store, action_next_step, action_load_files } from "../../store";

import { FilePond, registerPlugin } from "react-filepond";

// import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";

// import FilePondPluginImagePreview from "filepond-plugin-image-preview";

import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";

import FilePondPluginFileEncode from "filepond-plugin-file-encode";

// Import FilePond styles
import "filepond/dist/filepond.min.css";
// import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

import "../../styles/createDataset/uploader.css";

import { useDebouncedCallback } from "use-debounce";

import { server_create_dataset_upload } from "../../server/datasets";

import { AlertToast } from "../global";

// Register the plugins
registerPlugin(
  // FilePondPluginImageExifOrientation,
  // FilePondPluginImagePreview,
  FilePondPluginFileValidateType,
  FilePondPluginFileEncode
);

export default function Uploader({ dataCleaning, id }) {
  const fileRef = useRef();
  // store
  const { dataDispatch, dataStore } = useContext(Store);
  // state
  const [files, setFile] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  // Debounce callback
  // iam using debounce when you are using the real api you are using server prop instead of these
  // const debounced = useDebouncedCallback((value) => {
  //   setLoading(false);
  //   // strore files in global store
  //   dataDispatch(action_load_files(value));
  //   // empty the file
  //   setFile([]);
  //   if (!dataCleaning) {
  //     // go to next step
  //     dataDispatch(action_next_step(1));
  //   }
  // }, 100);

  // label template
  const labelTemplate = `
    <div class="labelWrapper text-center ${
      dataCleaning
        ? "d-flex align-items-center justify-content-md-between flex-wrap flex-md-nowrap justify-content-center labelWrapperData"
        : ""
    }">
      ${
        dataCleaning
          ? ""
          : `
        <span class="labelIcon d-flex align-items-center justify-content-center">
        <ion-icon name="cloud-upload-outline"></ion-icon>
        </span>
      `
      }
      <h2 class="labelTitle text-center text-capitalize">drag and drop images &amp; <br /> annotations</h2>
      <div class="d-flex align-items-center justify-content-center flex-wrap labelBtns ${
        dataCleaning ? "mb-0" : ""
      }">
        <div class="labelBtn">
          <span class="labelBtnIcon">
            <ion-icon name="document-outline"></ion-icon>
          </span>
          select files
        </div>
        <div class="labelBtn">
          <span class="labelBtnIcon">
          <ion-icon name="folder-open-outline"></ion-icon>
          </span>
          select folders
        </div>
      </div>

      ${
        dataCleaning
          ? ""
          : `
      
      <div class="labelFooter text-capitalize d-flex align-items-center justify-content-center flex-wrap">
        <div class="labelFooterTitle">
          <span><ion-icon name="image-outline"></ion-icon></span>
          images
        </div>
        <div class="labelFooterTitle">
          <span><ion-icon name="albums-outline"></ion-icon></span>
          annotations
        </div>
      </div>
      `
      }
    </div>
  `;

  return (
    <div className="position-relative">
      <FilePond
        ref={fileRef}
        acceptedFileTypes={["image/*"]}
        allowFileEncode={true}
        labelFileTypeNotAllowed={"file not valid"}
        allowMultiple={true}
        name={"dataset_files"}
        labelIdle={labelTemplate}
        // imagePreviewHeight={200}
        files={files}
        onaddfile={(err, file) => {
          if (err) {
            setError(err);
            setFile([]);
          } else {
            setError(null);
          }
        }}
        onupdatefiles={(items) => {
          // console.log(files);
          if (items.length) {
            setLoading(true);
            setFile(items);
          }
        }}
        server={{
          process: (
            fieldName,
            file,
            metadata,
            load,
            error,
            progress,
            abort,
            transfer,
            options
          ) => {
            if (files.length) {
              files.map((item) => {
                const formData = new FormData();
                formData.append("file", item);
                server_create_dataset_upload({ id, data: formData })
                  .then((response) => {
                    dataDispatch(action_load_files(response.data));
                  })
                  .then(() => {
                    setLoading(false);
                    if (!dataCleaning) {
                      dataDispatch(action_next_step(1));
                    }
                  })
                  .catch((err) => {
                    setLoading(false);
                    AlertToast("error", "please try again later");
                  });
              });
            }
          },
        }}
      />
      {error && error.main}
      {loading && (
        <div className="fileloading">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
}
