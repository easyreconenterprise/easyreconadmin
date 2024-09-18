import { DatePicker } from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import { MenuItem, Select, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { Breadcrumb, SimpleCard } from 'app/components'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import {
    Button,
    Checkbox,
    Grid,
    Icon,
    DialogTitle,
    styled,
    IconButton,
    InputAdornment,
    FormLabel,
    RadioGroup,
    Radio,
    TextField,
} from '@mui/material'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import { Span } from 'app/components/Typography'
import { useEffect, useState } from 'react'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import axios from 'axios'

// import { ToastContainer, toast } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'

// import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
import { Navigate, useNavigate } from 'react-router-dom'
import SimpleTable from 'app/views/material-kit/tables/SimpleTable'
import HomeTable from './HomeTable'
import Home2Table from '../Home2Table'

import ComparisonChart from '../Comparison'
import ComparisonChart2 from 'app/views/charts/echarts/ComparisonChart2'
import DoughnutChart from 'app/views/charts/echarts/Doughnut'
import AppEchart from 'app/views/charts/echarts/AppEchart'
const Container = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: { margin: '16px' },
    '& .breadcrumb': {
        marginBottom: '30px',
        [theme.breakpoints.down('sm')]: { marginBottom: '16px' },
    },
}))

// const TextField = styled(TextValidator)(() => ({
//     width: '100%',
//     marginBottom: '16px',
// }))
const initialState = {
    studentName: '',
    classname: '',
    address: '',
    parentsName: '',
    phone: '',

    email: '',
    username: '',
    date: '',
    password: '',
}

const AuditTrailReport = () => {
    return (
        <main>
            <Typography
                sx={{
                    m: '2rem',
                    p: '1rem',
                    bgcolor: 'primary.main',
                    color: 'white',
                    fontWeight: 'bold',
                }}
                variant="h4"
                component="h2"
            >
                View / Print Audit Trail Report
            </Typography>
            <Container maxWidth="sm">
                <FormControl
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        flexDirection: 'row',
                    }}
                >
                    <FormControlLabel
                        value="User-only"
                        control={<Radio color="primary" />}
                        label="View Audit Report by User Only"
                    />
                    <FormControlLabel
                        value="User-and-category"
                        control={<Radio color="primary" />}
                        label="View Audit Report by User and Category"
                    />
                </FormControl>
                <FormControl sx={{ mt: '2rem' }}>
                    <Container
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            flexDirection: 'row',
                        }}
                    >
                        <TextField
                            id="ledger-sequence"
                            label="User ID"
                            sx={{ ml: 2 }}
                        />
                        <FormControlLabel
                            control={<Checkbox defaultChecked />}
                            label="View for all users"
                        />
                    </Container>
                    <Container
                        className="date"
                        sx={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'space-around',
                            flexDirection: 'row',
                        }}
                    >
                        <TextField
                            size="small"
                            type="date"
                            name="date"
                            label="Start Date"
                            id="date"
                            sx={{ width: '20rem', p: 5, pl: 0 }}
                        />
                        <TextField
                            size="small"
                            type="date"
                            name="date"
                            label="End Date"
                            id="date"
                            sx={{ width: '20rem', p: 5 }}
                        />
                    </Container>
                </FormControl>
                <FormControl
                    sx={{
                        mt: '1rem',
                        display: 'flex',
                        justifyContent: 'start',
                        alignItems: 'center',
                        flexDirection: 'row',
                    }}
                >
                    <Button variant="contained">Save</Button>
                    <Button variant="contained" sx={{ ml: '2rem' }}>
                        Cancel
                    </Button>
                </FormControl>
            </Container>
        </main>
    )
}

export default AuditTrailReport
