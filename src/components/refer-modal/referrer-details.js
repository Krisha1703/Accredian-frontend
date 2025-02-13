import React from 'react';
import ContactFields from './contact-fields';
import {  Checkbox, FormControlLabel, Button, Typography, Box } from '@mui/material';

const ReferrerDetails = ({ formData, handleChange, nextPage }) => {
    return (
        <>
            <Typography variant="h6" color="primary" gutterBottom sx={{marginTop: "2vh"}}>
                Your Details
            </Typography>
            
            <ContactFields 
                formData={formData} 
                handleChange={handleChange} 
                prefix="your" 
            />

            <Box sx={{ display: 'flex', alignItems: 'center', my: 4 }}>
                <FormControlLabel
                    control={<Checkbox name="check" color="primary" />}
                    label="By filling this form, you authorize us to contact you via Email, Phone, or any other mode of communication for processing this referral."
                    sx={{ color: 'text.secondary', fontSize: "1rem" }}
                />
            </Box>

            <Button 
                variant="contained" 
                color="primary" 
                onClick={nextPage} 
                sx={{ my: 2 }}
            >
                Next
            </Button>
        </>
    );
};

export default ReferrerDetails;
