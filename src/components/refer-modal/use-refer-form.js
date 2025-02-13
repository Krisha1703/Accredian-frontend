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
        if (validateForm()) {
            try {
                const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/referrals';
                const response = await axios.post(apiUrl, formData);
                alert(`Referral submitted successfully! Response: ${response.data}`);
            } catch (error) {
                if (error.response) {
                    // Server Error
                    console.error("Error response:", error.response);
                    alert("Failed to submit referral. Server error occurred.");
                } else if (error.request) {
                    // No response received
                    console.error("Error request:", error.request);
                    alert("Failed to submit referral. No response from the server.");
                } else {
                    // Something else happened
                    console.error("Error message:", error.message);
                    alert("An unexpected error occurred. Please try again.");
                }
            }
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
