import React from 'react';
import { Select, MenuItem, InputLabel, FormControl, Button, Typography, Box } from '@mui/material';
import ContactFields from './contact-fields';

const RefereeDetails = ({ formData, handleChange, handleMajorChange, nicheCourse, setNicheCourse, major, prevPage, nicheCourses }) => {
    return (
        <>
            <Typography variant="h6" color="primary" gutterBottom sx={{marginTop: "2vh"}}>
                Your Friend's Details
            </Typography>

            <ContactFields 
                formData={formData} 
                handleChange={handleChange} 
                prefix="friend" 
            />

            {/* Course Selection */}
            <Box sx={{ my: 2 }}>
                <FormControl fullWidth variant="standard">
                    <InputLabel id="main-major-label">Select Your Friend's Major</InputLabel>
                    <Select
                        labelId="main-major-label"
                        id="main-major"
                        name="main-major"
                        value={major}
                        onChange={handleMajorChange}
                    >
                        <MenuItem value="">
                            <em>Select Major</em>
                        </MenuItem>
                        <MenuItem value="data-science">Data Science</MenuItem>
                        <MenuItem value="robotics">Robotics</MenuItem>
                        <MenuItem value="machine-learning">Machine Learning</MenuItem>
                    </Select>
                </FormControl>
            </Box>

            {major && (
                <Box sx={{ my: 2 }}>
                    <FormControl fullWidth variant="standard">
                        <InputLabel id="niche-course-label">Select Niche Course</InputLabel>
                        <Select
                            labelId="niche-course-label"
                            id="niche-course"
                            name="niche-course"
                            value={nicheCourse}
                            onChange={(e) => setNicheCourse(e.target.value)}
                        >
                            <MenuItem value="">
                                <em>Select Course</em>
                            </MenuItem>
                            {nicheCourses.map((course, index) => (
                                <MenuItem key={index} value={course}>
                                    {course}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>
            )}

            <Box sx={{ display: 'flex', gap: 2 }}>
                <Button 
                    variant="contained" 
                    color="inherit" 
                    onClick={prevPage}
                >
                    Back
                </Button>
                <Button 
                    type="submit" 
                    variant="contained" 
                    color="primary"
                >
                    Refer
                </Button>
            </Box>
        </>
    );
};

export default RefereeDetails;
