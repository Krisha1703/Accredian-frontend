import React from 'react';
import { TextField, Box } from '@mui/material';

const ContactFields = ({ formData, handleChange, prefix }) => {
    const labelPrefix = prefix === 'your' ? 'Your' : "Friend's";

    return (
        <Box>
            <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                <TextField
                    fullWidth
                    label={`${labelPrefix} First Name *`}
                    variant="standard"
                    name={`${prefix}FirstName`}
                    value={formData[`${prefix}FirstName`]}
                    onChange={handleChange}
                />
                <TextField
                    fullWidth
                    label={`${labelPrefix} Last Name *`}
                    variant="standard"
                    name={`${prefix}LastName`}
                    value={formData[`${prefix}LastName`]}
                    onChange={handleChange}
                />
            </Box>
            <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                <TextField
                    fullWidth
                    label={`${labelPrefix} Email Address *`}
                    variant="standard"
                    name={`${prefix}Email`}
                    type="email"
                    value={formData[`${prefix}Email`]}
                    onChange={handleChange}
                />
                <TextField
                    fullWidth
                    label={`${labelPrefix} Phone Number *`}
                    variant="standard"
                    name={`${prefix}Phone`}
                    type="tel"
                    value={formData[`${prefix}Phone`]}
                    onChange={handleChange}
                />
            </Box>
        </Box>
    );
};

export default ContactFields;
