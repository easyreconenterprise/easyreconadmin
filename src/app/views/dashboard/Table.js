import React, { useState } from 'react';
import './Style.css';
import { TableSection } from './TableSection.jsx';
import { info } from './data/info.js';
import { Table2 } from './Table2';
import { ExpendableButton } from './ExpendableButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import useOpenController from './Hooks/useOpenController';
import SubCollapsibleTable from './pages/Sudo';
const AccordionRoot = styled('div')(({ theme }) => ({
  width: '100%',
  '& .heading': {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));
const tableData = [
  {
    id: 1,
    name: 'Item 1',
    subItems: [{ id: 1.1, name: 'Sub Item 1.1', name: 'Sub Item 1.1', name: 'Sub Item 1.1' }],
  },
  {
    id: 2,
    name: 'Item 2',
    subItems: [
      { id: 2.1, name: 'Sub Item 2.1', name: 'Sub Item 1.1', name: 'Sub Item 1.1' },
      { id: 2.2, name: 'Sub Item 2.2', name: 'Sub Item 1.1', name: 'Sub Item 1.1' },
    ],
  },
  { id: 3, name: 'Item 3', subItems: [] },
];

export const Table = ({ captions, onDrop, headers }) => {
  const { isOpen, toggle } = useOpenController(false);
  const [isShown, setIsShown] = useState(false);
  const [selectedCaption, setSelectedCaption] = useState('');

  const handleCaptionChange = (event) => {
    setSelectedCaption(event.target.value);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedObject = JSON.parse(event.dataTransfer.getData('application/json'));
    // console.log(droppedObject);

    // Get the table headers
    // const headersWithoutSpaces = headers.map((header) => header.trim());

    // Create the object with headers as properties
    // const objectWithCaption = {};
    // headersWithoutSpaces.forEach((header) => {
    //   objectWithCaption[header] = droppedObject[header];
    // });

    const objectWithCaption = {};
    headers.forEach((header) => {
      const keyWithoutSpaces = header.replace(/\s+/g, '');
      objectWithCaption[keyWithoutSpaces] = droppedObject[header];
    });

    // Add the caption property
    objectWithCaption.CATEGORIES = selectedCaption;
    console.log(objectWithCaption);
    onDrop(objectWithCaption);
  };

  return (
    <div className="all">
      <div className="one">{/*  <Table2 />*/}</div>

      {/* <table>
        <thead>
          <td></td>
          <th>Caption</th>
          <th>Number</th>
          <th>Account Name</th>
          <th>Balance</th>
          <th>PY Balance</th>
        </thead>

        {info.map((personDetails, index) => (
          <TableSection personDetails={personDetails} index={index} />
        ))}
        </table>*/}
      <div style={{ marginTop: 100 }}>
        <h6>Select mapping caption</h6>
        <AccordionRoot>
          <Accordion>
            <AccordionSummary
              id="panel1a-header"
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
            >
              <Typography className="heading">Assets</Typography>
            </AccordionSummary>
            <Accordion>
              <AccordionSummary
                id="panel1a-header"
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
              >
                <Typography className="heading">Non current Asset</Typography>
              </AccordionSummary>

              <AccordionDetails>
                <AccordionSummary
                  id="panel1a-header"
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                >
                  <SubCollapsibleTable data={tableData} />
                  <br></br>
                </AccordionSummary>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                id="panel2a-header"
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                value={selectedCaption}
                onChange={handleCaptionChange}
              >
                <Typography className="heading" key={captions} value={captions}>
                  Current Asset
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  className="drop-field"
                  onDragOver={(event) => event.preventDefault()}
                  onDrop={handleDrop}
                >
                  Drop items here
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Accordion>
        </AccordionRoot>
        <AccordionRoot>
          <Accordion>
            <AccordionSummary
              id="panel1a-header"
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
            >
              <Typography className="heading">Equity & Liabilites</Typography>
            </AccordionSummary>
            <Accordion>
              <AccordionSummary
                id="panel1a-header"
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
              >
                <Typography className="heading">Equity</Typography>
              </AccordionSummary>

              <AccordionDetails>
                <AccordionSummary
                  id="panel1a-header"
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                >
                  <Typography className="heading">
                    {info.map((personDetails, index) => (
                      <TableSection personDetails={personDetails} index={index} />
                    ))}
                  </Typography>

                  <br></br>
                </AccordionSummary>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                id="panel1a-header"
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
              >
                <Typography className="heading">Non current Liabilites</Typography>
              </AccordionSummary>

              <AccordionDetails>
                <AccordionSummary
                  id="panel1a-header"
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                >
                  <Typography className="heading">
                    {info.map((personDetails, index) => (
                      <TableSection personDetails={personDetails} index={index} />
                    ))}
                  </Typography>

                  <br></br>
                </AccordionSummary>
              </AccordionDetails>
            </Accordion>

            <Accordion>
              <AccordionSummary
                id="panel2a-header"
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
              >
                <Typography className="heading">Current Liabilites</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
                  lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Accordion>
        </AccordionRoot>
      </div>
    </div>
  );
};
