import React from 'react';
import Papa from 'papaparse';

import { useEffect, useState } from 'react';

import './Style.css';
import { Link } from 'react-router-dom';

const Excel = ({ setData }) => {
  const [excelFile, setExcelFile] = useState(null);
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    Papa.parse(file, {
      header: true,
      complete: (results) => {
        const jsonData = results.data.filter((row) => Object.values(row).some(Boolean));

        setData(jsonData);
      },
      error: (error) => {
        console.error('Error parsing the file:', error);
      },
    });
  };

  const [excelFileError, setExcelFileError] = useState(null);
  //   const fileType = ['application/vnd.ms-excel'];
  //   const handleFile = (e) => {
  //     let selectedFile = e.target.files[0];
  //     if (selectedFile) {
  //       // console.log(selectedFile.type);
  //       if (selectedFile && fileType.includes(selectedFile.type)) {
  //         let reader = new FileReader();
  //         reader.readAsArrayBuffer(selectedFile);
  //         reader.onload = (e) => {
  //           setExcelFileError(null);
  //           setExcelFile(e.target.result);
  //         };
  //       } else {
  //         setExcelFileError('Please select only excel file types');
  //         setExcelFile(null);
  //       }
  //     } else {
  //       console.log('plz select your file');
  //     }
  //   };
  return (
    <div>
      <div className="container">
        {/* upload file section */}
        <div className="form">
          <form className="form-group" autoComplete="off">
            <label>
              <h5>Upload Excel file</h5>
            </label>
            <br></br>
            <input
              type="file"
              className="form-control"
              id="file"
              accept=".csv, application/vnd.ms-excel"
              onChange={handleFileUpload}

              // accept=".xlsx, .xls"
            ></input>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Excel;
