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

const RecSum = () => {
    return (
        <main>
            <Typography
                sx={{
                    textAlign: 'center',
                    m: '2rem',
                    p: '1rem',
                    bgcolor: 'primary.main',
                    color: 'white',
                    fontWeight: 'bold',
                }}
                variant="h4"
                component="h2"
            >
                Demo Account Reconcilation Summary As at{' '}
                <span>January 2024</span>
            </Typography>
            <Container maxWidth="sm">
                <Container
                    sx={{
                        mt: '1rem',
                        display: 'flex',
                        justifyContent: 'space-around',
                        flexDirection: 'row',
                    }}
                >
                    <Typography variant="h5">
                        Account Number: <span>225137568</span>
                    </Typography>
                    <Typography variant="h5">
                        Currency: <span>NGN</span>
                    </Typography>
                    <Typography variant="h5">
                        Period: <span>January 2024</span>
                    </Typography>
                </Container>
                <Container
                    sx={{
                        mt: '1rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        flexDirection: 'row',
                    }}
                >
                    <Typography variant="h6">
                        Balance as per Ledger<span>(01/Jan/2024)</span> -LMD
                    </Typography>
                    <TextField
                        sx={{ mb: '1rem', width: '20rem' }}
                        id="ledger-sequence"
                        type="number"
                        variant="outlined"
                    />
                </Container>
                <Container>
                    <Typography variant="h4">ADD: </Typography>
                    <Container></Container>
                </Container>
            </Container>
        </main>
    )
}

export default RecSum
