// import { Box, Typography, Grid, styled } from '@mui/material'
// import axios from 'axios'
// import Papa from 'papaparse'
// import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'

// import React from 'react'
// const TextField = styled(TextValidator)(() => ({
//     width: '100%',
//     marginBottom: '16px',
// }))
// const ExcelToJson = ({ setData, setIsNext }) => {
//     const apiUrl = process.env.REACT_APP_API_URL

//     const handleFileUpload = async (e) => {
//         e.preventDefault()

//         try {
//             const file = e.target.files[0]

//             Papa.parse(file, {
//                 header: true,
//                 complete: async (results) => {
//                     const jsonData = results.data.filter((row) =>
//                         Object.values(row).some(Boolean)
//                     )

//                     // Retrieve the token from localStorage
//                     const jwtToken = localStorage.getItem('jwtToken')
//                     console.log('Retrieved JWT Token:', jwtToken)

//                     if (jwtToken) {
//                         const headers = {
//                             Authorization: `Bearer ${jwtToken}`,
//                         }

//                         const formData = new FormData()
//                         formData.append('csvFile', file)

//                         try {
//                             const response = await axios.post(
//                                 `${apiUrl}/api/upload`,
//                                 formData,
//                                 { headers }
//                             )

//                             console.log('Response after upload:', response.data) // Log the response from the server

//                             setData(jsonData) // Proceed to the next step
//                             console.log('Navigating to next step...')
//                             setIsNext(true)
//                         } catch (error) {
//                             console.error('Error uploading data:', error)
//                         }
//                     } else {
//                         console.error('JWT token not found in localStorage')
//                     }
//                 },
//                 error: (error) => {
//                     console.error('Error parsing the file:', error)
//                 },
//             })
//         } catch (err) {
//             console.error('Error uploading and parsing file:', err)
//         }
//     }

//     return (
//         <section>
//             <div>
//                 <Box style={{ marginLeft: '30px' }}>
//                     <ValidatorForm>
//                         <Typography variant="subtitle1">Select File</Typography>
//                         <input
//                             type="file"
//                             id="file"
//                             name="csvFile"
//                             accept=".csv"
//                             onChange={handleFileUpload}
//                         />
//                         <Typography variant="subtitle1">Date Filter</Typography>
//                         <Grid item lg={3} md={3} sm={3} xs={3} sx={{ mt: 2 }}>
//                             <TextField
//                                 size="small"
//                                 type="date"
//                                 name="date"
//                                 style={{ width: '30%' }}
//                                 label="Date of birth"
//                                 // value={date}
//                                 id="date"
//                                 // onChange={handleChange}
//                                 // helperText={touched.date && errors.date}
//                                 // error={Boolean(errors.date && touched.date)}
//                                 sx={{ mb: 3 }}
//                             />
//                         </Grid>
//                     </ValidatorForm>
//                 </Box>
//             </div>
//         </section>
//     )
// }

// export default ExcelToJson
import React, { useState } from "react";
import Papa from "papaparse";
import { Box, Typography, Grid, styled } from "@mui/material";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import axios from "axios";

const TextField = styled(TextValidator)(() => ({
  width: "100%",
  marginBottom: "16px",
}));

const ExcelToJson = ({ setData, setFile }) => {
  const apiUrl = process.env.REACT_APP_API_URL;

  const handleFileUpload = async (e) => {
    e.preventDefault();

    try {
      const file = e.target.files[0];

      Papa.parse(file, {
        header: true,
        complete: async (results) => {
          const jsonData = results.data.filter((row) =>
            Object.values(row).some(Boolean)
          );

          // Update the file state in the parent component
          setFile(file);

          // Proceed with JSON data processing
          setData(jsonData);
        },
        error: (error) => {
          console.error("Error parsing the file:", error);
        },
      });
    } catch (err) {
      console.error("Error uploading and parsing file:", err);
    }
  };

  return (
    <section>
      <div>
        <Box style={{ marginLeft: "30px" }}>
          <ValidatorForm>
            <Typography variant="subtitle1">Select File</Typography>
            <input
              type="file"
              id="file"
              name="csvFile"
              accept=".csv"
              onChange={handleFileUpload}
            />
            <Typography variant="subtitle1">Date Filter</Typography>
            <Grid item lg={3} md={3} sm={3} xs={3} sx={{ mt: 2 }}>
              <TextField
                size="small"
                type="date"
                name="date"
                style={{ width: "30%" }}
                label="Date of birth"
                id="date"
                sx={{ mb: 3 }}
              />
            </Grid>
          </ValidatorForm>
        </Box>
      </div>
    </section>
  );
};

export default ExcelToJson;
