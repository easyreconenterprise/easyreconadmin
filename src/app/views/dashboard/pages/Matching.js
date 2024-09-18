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

const Matching = () => {
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
                Reconcilation Keyword
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
                        value="New"
                        control={<Radio color="primary" />}
                        label="New"
                    />
                    <FormControlLabel
                        value="Edit"
                        control={<Radio color="primary" />}
                        label="Edit"
                    />
                    <FormControlLabel
                        value="Delete"
                        control={<Radio color="primary" />}
                        label="Delete"
                    />
                </FormControl>
                <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Allow UID"
                />
                <FormControl
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        flexDirection: 'row',
                    }}
                >
                    <TextField
                        id="ledger"
                        label="Ledger Keyword"
                        variant="outlined"
                    />
                    <TextField
                        id="statement"
                        label="Statement Keyword"
                        variant="outlined"
                    />
                    <TextField
                        id="order"
                        label="Order (1,2...)"
                        variant="outlined"
                    />
                    <TextField
                        id="statement-sequence"
                        label="Statement Sequence (Optional)"
                        variant="outlined"
                    />
                    <TextField
                        id="ledger-sequence"
                        label="Ledger Sequence (Optional)"
                        variant="outlined"
                    />
                </FormControl>
                <FormControl
                    sx={{
                        display: 'flex',
                        mt: '1rem',
                        justifyContent: 'space-around',
                        flexDirection: 'row',
                    }}
                >
                    <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label="For Reversals"
                    />
                    <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label="Enable Special Characters"
                    />
                    <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label="Allow Alphanumeric"
                    />
                </FormControl>
                <FormControl
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        flexDirection: 'row',
                    }}
                >
                    <FormControl
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-around',
                            flexDirection: 'row',
                        }}
                    >
                        <FormControlLabel
                            value="Ledger"
                            control={<Radio color="primary" />}
                            label="Ledger"
                        />
                        <FormControlLabel
                            value="Statement"
                            control={<Radio color="primary" />}
                            label="Statement"
                        />
                        <FormControlLabel
                            value="Both"
                            control={<Radio color="primary" />}
                            label="Both"
                        />
                    </FormControl>
                    <FormControl
                        sx={{ display: 'flex', justifyContent: 'space-around' }}
                    >
                        <TextField
                            sx={{ mb: '1rem' }}
                            id="Delimit-ledger"
                            label="Delimit Ledger"
                            variant="outlined"
                        />
                        <TextField
                            id="Delimit-statement"
                            label="Delimit Statement"
                            variant="outlined"
                        />
                    </FormControl>
                </FormControl>

                <FormControl
                    sx={{
                        mt: '1.5rem',
                        display: 'flex',
                        justifyContent: 'space-around',
                        flexDirection: 'row',
                    }}
                >
                    <FormControlLabel
                        value="Exact References"
                        control={<Radio color="primary" />}
                        label="Exact References"
                    />
                    <FormControlLabel
                        value="Sub-characters"
                        control={<Radio color="primary" />}
                        label="Sub-characters"
                    />
                </FormControl>
                <FormControl
                    sx={{
                        mt: '1rem',
                        display: 'flex',
                        justifyContent: 'space-around',
                        flexDirection: 'row',
                    }}
                >
                    <FormControl>
                        <Typography variant="h5" sx={{ mb: '.5rem' }}>
                            Ledger:
                        </Typography>
                        <TextField
                            sx={{ mb: '1rem', width: '20rem' }}
                            id="ledger-sequence"
                            label="No of characters to omit after a word"
                            variant="outlined"
                        />
                        <TextField
                            id="ledger-sequence"
                            label="No of characters to count after a word"
                        />
                    </FormControl>
                    <FormControl>
                        <Typography variant="h5" sx={{ mb: '.5rem' }}>
                            Statement:
                        </Typography>
                        <TextField
                            sx={{ mb: '1rem', width: '20rem' }}
                            id="ledger-sequence"
                            label="No of characters to omit after a word"
                            variant="outlined"
                        />
                        <TextField
                            id="ledger-sequence"
                            label="No of characters to count after a word"
                        />
                    </FormControl>
                </FormControl>
                <FormControl
                    sx={{
                        mt: '1rem',
                        display: 'flex',
                        justifyContent: 'space-around',
                        flexDirection: 'row',
                    }}
                >
                    <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label="Use Extended Settings"
                    />
                    <TextField
                        id="ledger-sequence"
                        label="No of matches details"
                    />
                </FormControl>
                <FormControl
                    sx={{
                        mt: '1rem',
                        display: 'flex',
                        justifyContent: 'end',
                        alignItems: 'end',
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

export default Matching
