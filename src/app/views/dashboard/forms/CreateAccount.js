import { DatePicker } from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import { MenuItem, Select, Stack } from '@mui/material'
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
    FormControl,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
} from '@mui/material'
import { Span } from 'app/components/Typography'
import { useEffect, useState } from 'react'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import axios from 'axios'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import SimpleTable from 'app/views/material-kit/tables/SimpleTable'
const Container = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: { margin: '16px' },
    '& .breadcrumb': {
        marginBottom: '30px',
        [theme.breakpoints.down('sm')]: { marginBottom: '16px' },
    },
}))

const TextField = styled(TextValidator)(() => ({
    width: '100%',
    marginBottom: '16px',
}))
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

const CreateAccount = () => {
    const navigate = useNavigate()
    const [state, setState] = useState({ date: new Date() })
    const [showPassword, setShowPassword] = useState(false)
    const [classData, setClassData] = useState([]) // To store the list of classes

    const [formData, setFormData] = useState(initialState)
    const {
        studentName,
        classname,
        address,
        parentsName,
        phone,
        AdmNo,
        birthday,
        username,
        date,

        email,
        password,
    } = formData
    const [states, setStates] = useState({
        checkedA: true,
        checkedB: true,
        checkedF: true,
        checkedG: true,
    })

    const handleChanges = (name) => (event) => {
        setStates({ ...state, [name]: event.target.checked })
    }
    const apiUrl = process.env.REACT_APP_API_URL.trim()

    useEffect(() => {
        ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
            if (value !== state.password) return false

            return true
        })
        return () => ValidatorForm.removeValidationRule('isPasswordMatch')
    }, [state.password])
    useEffect(() => {
        // Assuming you have the JWT token stored in localStorage
        const token = localStorage.getItem('jwtToken')
        // Fetch classes from your API
        fetch(`${apiUrl}/api/class`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`, // Include your authentication token
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setClassData(data)
            })
            .catch((error) => {
                console.error('Error fetching classes:', error)
            })
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = {
            studentName,
            classname,
            address,
            parentsName,
            username,
            phone,
            AdmNo,
            email,
            password,
        }
        try {
            await axios.post(`${apiUrl}/api/register`, {
                ...formData,
                role: 'student',
            })

            // navigate("/dashboard/admin");
            toast.success('User successfully created')
        } catch (err) {
            console.error('Error registering student:', err)
            toast.error('Unable to create user')
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleDateChange = (date) => setState({ ...state, date })

    return (
        <div>
            <Container>
                <Stack spacing={3}>
                    <SimpleCard>
                        <DialogTitle id="form-dialog-title">
                            {' '}
                            Create New Account
                        </DialogTitle>

                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={states.checkedA}
                                    onChange={handleChanges('checkedA')}
                                    value="checkedA"
                                />
                            }
                            label="Create New Account"
                        />
                        <br></br>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={states.checkedA}
                                    onChange={handleChanges('checkedA')}
                                    value="checkedA"
                                />
                            }
                            label="Modify Existing Account"
                        />
                        <br></br>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={states.checkedA}
                                    onChange={handleChanges('checkedA')}
                                    value="checkedA"
                                />
                            }
                            label="Mass Zero Account Creation"
                        />
                        <br></br>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={states.checkedA}
                                    onChange={handleChanges('checkedA')}
                                    value="checkedA"
                                />
                            }
                            label="Retrieve New Account from CBA"
                        />
                        <br></br>
                        <Button
                            color="primary"
                            variant="contained"
                            style={{ marginRight: '30px' }}
                        >
                            <Link
                                to="/dashboard/frmNewAccount"
                                style={{
                                    textDecoration: 'none',
                                    color: 'inherit',
                                }}
                            >
                                <Span
                                    sx={{ pl: 1, textTransform: 'capitalize' }}
                                >
                                    Next
                                </Span>
                            </Link>
                        </Button>
                        <Button
                            color="primary"
                            variant="contained"
                            type="submit"
                        >
                            <Span sx={{ pl: 1, textTransform: 'capitalize' }}>
                                Cancel
                            </Span>
                        </Button>
                    </SimpleCard>
                </Stack>
                <ToastContainer />
            </Container>
        </div>
    )
}

export default CreateAccount
