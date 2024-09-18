// // SwitchAccountModal.js

// import React, { useState } from 'react'
// import {
//     Dialog,
//     DialogTitle,
//     DialogContent,
//     DialogActions,
//     Button,
//     Select,
//     MenuItem,
//     InputLabel,
//     FormControl,
// } from '@mui/material'

// const SwitchAccount = ({ open, onClose, onSubmit }) => {
//     const [formData, setFormData] = useState({
//         affiliate: '',
//         domain: '',
//         account: '',
//         month: '',
//     })

//     const handleChange = (e) => {
//         const { name, value } = e.target
//         setFormData((prevFormData) => ({
//             ...prevFormData,
//             [name]: value,
//         }))
//     }

//     const handleSubmit = () => {
//         onSubmit(formData)
//     }

//     return (
//         <Dialog open={open} onClose={onClose}>
//             <DialogTitle>Switch Account</DialogTitle>
//             <DialogContent>
//                 <FormControl fullWidth sx={{ marginBottom: 2 }}>
//                     <InputLabel>Affiliate</InputLabel>
//                     <Select
//                         name="affiliate"
//                         value={formData.affiliate}
//                         onChange={handleChange}
//                     >
//                         <MenuItem value="affiliate1">Affiliate 1</MenuItem>
//                         <MenuItem value="affiliate2">Affiliate 2</MenuItem>
//                     </Select>
//                 </FormControl>
//                 {/* Add similar form elements for other fields */}
//             </DialogContent>
//             <DialogActions>
//                 <Button onClick={onClose}>Cancel</Button>
//                 <Button onClick={handleSubmit} variant="contained">
//                     Save
//                 </Button>
//             </DialogActions>
//         </Dialog>
//     )
// }

// export default SwitchAccount

import React, { useState } from 'react'
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
    TextField,
} from '@mui/material'

const WorkingMonth = ({ open, onClose, onSubmit }) => {
    const [formData, setFormData] = useState({
        affiliate: '',
        domain: '',
        account: '',
        month: '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }))
    }

    const handleSubmit = () => {
        onSubmit(formData)
    }

    const handleDialogContentClick = (e) => {
        // Prevent click events inside the modal content from propagating to the Dialog
        e.stopPropagation()
    }

    return (
        <Dialog
            open={open}
            onClose={onClose}
            aria-labelledby="form-dialog-title"
        >
            <DialogTitle id="form-dialog-title">
                Choose Working Month
            </DialogTitle>
            <DialogContent onClick={handleDialogContentClick}>
                <label>Select Working Moth</label>

                <Select
                    name="affiliate"
                    value={formData.affiliate}
                    onChange={handleChange}
                    fullWidth
                    autoFocus
                    placeholder="Address"
                    margin="dense"
                >
                    <MenuItem value="affiliate1">Affiliate 1</MenuItem>
                    <MenuItem value="affiliate2">Affiliate 2</MenuItem>
                </Select>
            </DialogContent>
            <DialogActions>
                <Button variant="outlined" color="secondary" onClick={onClose}>
                    Cancel
                </Button>
                <Button color="primary">Save Changes</Button>
            </DialogActions>
        </Dialog>
    )
}

export default WorkingMonth
