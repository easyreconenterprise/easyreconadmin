import { useState } from 'react';
import ExcelToJson from './ExcelToJson';
import { useNavigate } from 'react-router-dom';
import { styled, Button } from '@mui/material';
import UnMappedData from './UnmappedData';
import { SimpleCard } from 'app/components';

import './Style.css';
import SimpleDialogDemo from 'app/views/material-kit/dialog/SimpleDialog';
import Mapped from './Mapped';
const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
}));
const AppButtonRoot = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
  '& .breadcrumb': {
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: { marginBottom: '16px' },
  },
  '& .button': { margin: theme.spacing(1) },
  '& .input': { display: 'none' },
}));
const Import = () => {
  const [data, setData] = useState([]);
  const [isNext, setIsNext] = useState(false);
  const [categorizedData, setCategorizedData] = useState([]);
  const [isMap, setIsMap] = useState(false);
  const navigate = useNavigate();

  const mappedHeaders = categorizedData.length > 0 ? Object.keys(categorizedData[0]) : [];

  const handleDataChange = (jsonData) => {
    setData(jsonData);
  };

  const handleNextClick = () => {
    // Navigate to the unmapped data page using React Router
    if (data.length > 0) {
      setIsNext(true);
      navigate('/dashboard/one');
    }
    localStorage.removeItem('data');
  };

  return (
    <main>
      {!isNext && (
        <section style={{ marginTop: '50px' }}>
          <b>
            <h2
              style={{
                fontSize: '20px',
                marginBottom: '10px',
                marginLeft: '30px',
                fontWeight: '800',
              }}
            >
              Import Data from CSV
            </h2>
          </b>
          <h2 style={{ fontSize: '15px', marginBottom: '30px', marginLeft: '30px' }}>
            Dont waste time capturing data, upload it instead
          </h2>
          <ExcelToJson
            setData={setData}
            onDataChange={handleDataChange}
            style={{ marginTop: '100px' }}
          />
        </section>
      )}
      {/* Add Next button */}

      <button className="love" variant="contained" color="primary" onClick={handleNextClick}>
        Next
      </button>
    </main>
  );
};

export default Import;
