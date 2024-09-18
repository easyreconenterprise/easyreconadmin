import {} from '@mui/material';
import { Fragment, React, useState } from 'react';
import useFetch from 'hooks/useFetch';
import { Box } from '@mui/system';
import './Style.css';
import {
  Card,
  Button,
  Grid,
  styled,
  Autocomplete,
  TextField,
  useTheme,
  Icon,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material';
import RowCards from '../shared/RowCards';
import PaginationTable from 'app/views/material-kit/tables/PaginationTable';
import FormDialog from 'app/views/material-kit/dialog/FormDialog';
import { Breadcrumb } from 'app/components';
import { Link } from 'react-router-dom';
const ContentBox = styled('div')(({ theme }) => ({
  margin: '30px',
  [theme.breakpoints.down('sm')]: { margin: '16px' },
}));

const Title = styled('span')(() => ({
  fontSize: '1rem',
  fontWeight: '500',
  marginRight: '.5rem',
  textTransform: 'capitalize',
}));

const SubTitle = styled('span')(({ theme }) => ({
  fontSize: '0.875rem',
  color: theme.palette.text.secondary,
}));

const H4 = styled('h4')(({ theme }) => ({
  fontSize: '1rem',
  fontWeight: '500',
  marginBottom: '16px',
  textTransform: 'capitalize',
  color: theme.palette.text.secondary,
}));
const StyledTable = styled(Table)(() => ({
  whiteSpace: 'pre',
  '& thead': {
    '& tr': { '& th': { paddingLeft: 0, paddingRight: 0 } },
  },
  '& tbody': {
    '& tr': { '& td': { paddingLeft: 0, textTransform: 'capitalize' } },
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
}));

const FileImport = () => {
  const { palette } = useTheme();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const data = [
    {
      username: 'olanii hope',
      email: 'love@gmail.com',
      phone: '09032354',
      address: 'fdfdfldk',
    },
    {
      username: 'olanii hope',
      email: 'love@gmail.com',
      phone: '09032354',
      address: 'fdfdfldk',
    },
    {
      username: 'olanii hope',
      email: 'love@gmail.com',
      phone: '09032354',
      address: 'fdfdfldk',
    },
    {
      username: 'olanii hope',
      email: 'love@gmail.com',
      phone: '09032354',
      address: 'fdfdfldk',
    },
    {
      username: 'olanii hope',
      email: 'love@gmail.com',
      phone: '09032354',
      address: 'fdfdfldk',
    },
  ];
  const AutoComplete = styled(Autocomplete)(() => ({
    width: 300,
    marginBottom: '16px',
  }));

  const suggestions = [
    { label: 'Afghanistan' },
    { label: 'Aland Islands' },
    { label: 'Albania' },
    { label: 'Algeria' },
  ];
  return (
    <Fragment>
      <ContentBox className="analytics">
        <Box className="breadcrumb">
          <Breadcrumb
            routeSegments={[{ name: 'Material', path: '/material' }, { name: 'Admin' }]}
          />
          <FormDialog />
        </Box>

        <Box width="100%" overflow="auto">
          <StyledTable>
            <TableHead>
              <TableRow>
                <TableCell align="center">S/N</TableCell>
                <TableCell align="left">
                  <select id="dropdown">
                    <option>Choose an option</option>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                  </select>
                </TableCell>
                <TableCell align="center">Email/Username</TableCell>
                <TableCell align="center">Phone</TableCell>
                <TableCell align="center">Address</TableCell>

                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data &&
                data.map((item) => (
                  <TableRow key={item?._id}>
                    <TableCell align="center"></TableCell>
                    <TableCell align="left">{item.username}</TableCell>
                    <TableCell align="center">{item.email}</TableCell>
                    <TableCell align="center">{item.phone}</TableCell>
                    <TableCell align="center">{item.address}</TableCell>
                    <TableCell align="center"></TableCell>

                    <TableCell align="right">
                      <IconButton>
                        <Icon color="error">close</Icon>
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </StyledTable>

          <TablePagination
            sx={{ px: 2 }}
            page={page}
            component="div"
            rowsPerPage={rowsPerPage}
            count={data.length}
            onPageChange={handleChangePage}
            rowsPerPageOptions={[5, 10, 25]}
            onRowsPerPageChange={handleChangeRowsPerPage}
            nextIconButtonProps={{ 'aria-label': 'Next Page' }}
            backIconButtonProps={{ 'aria-label': 'Previous Page' }}
          />
        </Box>

        {/* <TopSellingTable />
            <StatCards2 />

            <H4>Ongoing Projects</H4>
            <RowCards />
          </Grid>

          <Grid item lg={4} md={4} sm={12} xs={12}>
            <Card sx={{ px: 3, py: 2, mb: 3 }}>
              <Title>Traffic Sources</Title>
              <SubTitle>Last 30 days</SubTitle>

              <DoughnutChart
                height="300px"
                color={[palette.primary.dark, palette.primary.main, palette.primary.light]}
              />
            </Card> . . . . . . . . . .  . . 

            <UpgradeCard />
            <Campaigns />*/}
        <Button color="primary" variant="contained" type="submit" style={{ marginLeft: '30px' }}>
          <Link to="/dashboard/mapped" style={{ color: '#fff' }}>
            Back
          </Link>
        </Button>
        <Button color="primary" variant="contained" type="submit" style={{ marginLeft: '30px' }}>
          <Link to="/dashboard/mapped" style={{ color: '#fff' }}>
            Next
          </Link>
        </Button>
      </ContentBox>
    </Fragment>
  );
};

export default FileImport;
