import { useState } from "react";
import majorOptions from "./major-options";

const useReferForm = () => {
    const [page, setPage] = useState(1);
    const [formData, setFormData] = useState({
        yourFirstName: '',
        yourLastName: '',
        yourEmail: '',
        yourPhone: '',
        friendFirstName: '',
        friendLastName: '',
        friendEmail: '',
        friendPhone: ''
    });
    const [major, setMajor] = useState("");
    const [nicheCourses, setNicheCourses] = useState([]);
    const [nicheCourse, setNicheCourse] = useState("");

    const handleMajorChange = (e) => {
        const selectedMajor = e.target.value;
        setMajor(selectedMajor);
        setNicheCourses(majorOptions[selectedMajor] || []);
        setNicheCourse("");
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const nextPage = () => setPage((prev) => prev + 1);
    const prevPage = () => setPage((prev) => prev - 1);

    return {
        page,
        formData,
        major,
        nicheCourses,
        nicheCourse,
        handleMajorChange,
        handleChange,
        setNicheCourse,
        nextPage,
        prevPage
    };
};

export default useReferForm;
