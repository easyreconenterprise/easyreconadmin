import React, { useState } from "react";
import Papa from "papaparse";
import {
  Box,
  Typography,
  Grid,
  styled,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import axios from "axios";
import * as XLSX from "xlsx";

const TextField = styled(TextValidator)(() => ({
  width: "100%",
  marginBottom: "16px",
}));

const ExcelToJson = ({ setData, setFile }) => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const [dateFilter, setDateFilter] = useState(""); // State to manage selected option

  // const handleFileUpload = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const file = e.target.files[0];

  //     Papa.parse(file, {
  //       header: true,
  //       complete: async (results) => {
  //         const jsonData = results.data.filter((row) =>
  //           Object.values(row).some(Boolean)
  //         );

  //         // Update the file state in the parent component
  //         setFile(file);

  //         // Proceed with JSON data processing
  //         setData(jsonData);
  //       },
  //       error: (error) => {
  //         console.error("Error parsing the file:", error);
  //       },
  //     });
  //   } catch (err) {
  //     console.error("Error uploading and parsing file:", err);
  //   }
  // };
  const handleFileUpload = async (e) => {
    e.preventDefault();

    try {
      const file = e.target.files[0];
      const fileType = file.name.split(".").pop().toLowerCase();

      if (fileType === "csv") {
        Papa.parse(file, {
          header: true,
          complete: async (results) => {
            const jsonData = results.data.filter((row) =>
              Object.values(row).some(Boolean)
            );
            setFile(file);
            setData(jsonData);
          },
          error: (error) => {
            console.error("Error parsing CSV file:", error);
          },
        });
      } else if (fileType === "xlsx") {
        const reader = new FileReader();
        reader.onload = (event) => {
          const data = new Uint8Array(event.target.result);
          const workbook = XLSX.read(data, { type: "array" });
          const firstSheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[firstSheetName];
          const jsonData = XLSX.utils.sheet_to_json(worksheet);
          setFile(file);
          setData(jsonData);
        };
        reader.readAsArrayBuffer(file);
      } else {
        console.error("Unsupported file format.");
      }
    } catch (err) {
      console.error("Error uploading and parsing file:", err);
    }
  };
  const handleDateFilterChange = (event) => {
    setDateFilter(event.target.value);
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
              accept=".csv .xlsx"
              onChange={handleFileUpload}
            />
            <Typography variant="subtitle1">Date Filter</Typography>
            <Grid item lg={3} md={3} sm={3} xs={3} sx={{ mt: 2 }}>
              <FormControl size="small" sx={{ mb: 3 }} style={{ width: "30%" }}>
                <InputLabel id="date-filter-label">
                  Select Date Filter
                </InputLabel>
                <Select
                  labelId="date-filter-label"
                  id="date-filter"
                  value={dateFilter}
                  onChange={handleDateFilterChange}
                  label="Select Date Filter"
                >
                  <MenuItem value="postDate">Post Date</MenuItem>
                  <MenuItem value="valDate">Val Date</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </ValidatorForm>
        </Box>
      </div>
    </section>
  );
};

export default ExcelToJson;
