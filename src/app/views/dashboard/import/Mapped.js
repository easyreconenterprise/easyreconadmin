import { DatePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Icon,
  Radio,
  RadioGroup,
  styled,
} from '@mui/material';
import { Span } from 'app/components/Typography';
import { useEffect, useState } from 'react';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import './Style.css';
import Mapsheet from './Mapsheet';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';
const Mapped = () => {
  return (
    <div>
      <SpreadsheetComponent />
      <Mapsheet />
    </div>
  );
};

export default Mapped;
