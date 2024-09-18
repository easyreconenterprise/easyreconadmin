import { useState } from 'react';
import ExcelToJson from './ExcelToJson';
import { useNavigate } from 'react-router-dom';
import { styled, Button } from '@mui/material';
import UnMappedData from './UnmappedData';
import { SimpleCard } from 'app/components';

import './Style.css';
import Trialbal from './Trialbal';

const One = ({ data }) => {
  const [categorizedData, setCategorizedData] = useState([]);
  const [isMap, setIsMap] = useState(false);

  const mappedHeaders = categorizedData.length > 0 ? Object.keys(categorizedData[0]) : [];

  return (
    <section>
      <UnMappedData data={data} />
      {/* <button onClick={handleSummaryClick}>
      {isMap ? "Hide Mapped Table" : "View Mapped Table"}
    </button>
    <button
      onClick={() => {
        if (categorizedData.length > 0) {
          setStatement(!Statement);
        }
      }}
    >
      View Financial Statement
    </button> */}
    </section>
  );
};

export default One;
