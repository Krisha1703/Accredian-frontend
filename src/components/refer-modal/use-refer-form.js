import { useState } from "react";
import majorOptions from "./major-options";
import { referralSchema } from "../../schema/index";
import axios from 'axios';
import { z } from "zod";


const useReferForm = () => {
    const [page, setPage] = useState(1);
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        yourFirstName: '',
        yourLastName: '',
        yourEmail: '',
        yourPhone: '',
        friendFirstName: '',
        friendLastName: '',
        friendEmail: '',
        friendPhone: '',
        major: '',
        nicheCourse: ''
    });
    const [nicheCourses, setNicheCourses] = useState([]);

    const handleMajorChange = (e) => {
        const selectedMajor = e.target.value;
        setFormData({ ...formData, major: selectedMajor, nicheCourse: '' });
        setNicheCourses(majorOptions[selectedMajor] || []);
    };

    const handleNicheCourseChange = (e) => {
        const selectedNicheCourse = e.target.value;
        setFormData({ ...formData, nicheCourse: selectedNicheCourse });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        try {
            referralSchema.parse(formData);
            setErrors({});
            return true;
        } catch (error) {
            if (error instanceof z.ZodError) {
                const fieldErrors = {};
                let errorMessage = '';
                error.errors.forEach(err => {
                    fieldErrors[err.path[0]] = err.message;
                    if (!errorMessage) {  
                        errorMessage = err.message;
                        
                    }
                });
                setErrors(fieldErrors);
            }
            return false;
        }
    };
    

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Validate the form before submitting
        if (validateForm()) {
            try {
                const apiUrl = process.env.REACT_APP_API_URL;
                const response = await axios.post(apiUrl, formData);
    
                // Check if the response contains an error
                if (response.data && response.data.error) {
                    alert(`Error: ${response.data.error}`);
                    return; 
                }
    
                // If no error, show success message
                alert("Referral submitted successfully!");
    
            } catch (error) {
                if (error.response) {
                    // Server error 
                    console.error("Error response:", error.response);
                    alert(`Failed to submit referral: ${error.response.data.error || 'Server error occurred.'}`);
                } else if (error.request) {
                    // No response received from the server
                    console.error("Error request:", error.request);
                    alert("Failed to submit referral. No response from the server.");
                } else {
                    // Any other error 
                    console.error("Error message:", error.message);
                    alert("An unexpected error occurred. Please try again.");
                }
            }
        } else {
            // If form is not valid, show validation error message
            alert("Please fill in the form correctly before submitting.");
        }
    };
    

    const nextPage = () => setPage((prev) => prev + 1);
    const prevPage = () => setPage((prev) => prev - 1);

    return {
        page,
        formData,
        nicheCourses,
        handleMajorChange,
        handleNicheCourseChange,
        handleChange,
        nextPage,
        errors,
        handleSubmit,
        prevPage
    };
};

export default useReferForm;
