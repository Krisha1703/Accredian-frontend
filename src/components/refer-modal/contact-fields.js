import React from 'react';
import { TextField, Box, FormHelperText, Grid } from '@mui/material';

const ContactFields = ({ formData, handleChange, prefix, errors }) => {
    const labelPrefix = prefix === 'your' ? 'Your' : "Friend's";

    return (
        <Box>
            <Grid container spacing={2}>
                {/* First Name Field */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label={`${labelPrefix} First Name *`}
                        variant="standard"
                        name={`${prefix}FirstName`}
                        value={formData[`${prefix}FirstName`]}
                        onChange={handleChange}
                        error={!!errors[`${prefix}FirstName`]} 
                    />
                    {errors[`${prefix}FirstName`] && (
                        <FormHelperText sx={{ color: "red", marginTop: 1 }}>
                            {errors[`${prefix}FirstName`]} *
                        </FormHelperText>
                    )}
                </Grid>

                {/* Last Name Field */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label={`${labelPrefix} Last Name *`}
                        variant="standard"
                        name={`${prefix}LastName`}
                        value={formData[`${prefix}LastName`]}
                        onChange={handleChange}
                        error={!!errors[`${prefix}LastName`]} 
                    />
                    {errors[`${prefix}LastName`] && (
                        <FormHelperText sx={{ color: "red", marginTop: 1 }}>
                            {errors[`${prefix}LastName`]} *
                        </FormHelperText>
                    )}
                </Grid>

                {/* Email Address Field */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label={`${labelPrefix} Email Address *`}
                        variant="standard"
                        name={`${prefix}Email`}
                        type="email"
                        value={formData[`${prefix}Email`]}
                        onChange={handleChange}
                        error={!!errors[`${prefix}Email`]} 
                    />
                    {errors[`${prefix}Email`] && (
                        <FormHelperText sx={{ color: "red", marginTop: 1 }}>
                            {errors[`${prefix}Email`]} *
                        </FormHelperText>
                    )}
                </Grid>

                {/* Phone Number Field */}
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label={`${labelPrefix} Phone Number *`}
                        variant="standard"
                        name={`${prefix}Phone`}
                        type="tel"
                        value={formData[`${prefix}Phone`]}
                        onChange={handleChange}
                        error={!!errors[`${prefix}Phone`]} 
                    />
                    {errors[`${prefix}Phone`] && (
                        <FormHelperText sx={{ color: "red", marginTop: 1 }}>
                            {errors[`${prefix}Phone`]} *
                        </FormHelperText>
                    )}
                </Grid>
            </Grid>
        </Box>
    );
};

export default ContactFields;
