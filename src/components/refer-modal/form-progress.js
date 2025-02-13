 // Calculate form progress based on fields filled
 const calculateProgress = (formData, major, nicheCourse) => {
    const fields = [
        formData.yourFirstName,
        formData.yourLastName,
        formData.yourEmail,
        formData.yourPhone,
        formData.friendFirstName,
        formData.friendLastName,
        formData.friendEmail,
        formData.friendPhone,
        major,
        nicheCourse,
    ];
    const filledFields = fields.filter((field) => field !== "").length;
    return (filledFields / fields.length) * 100;
};

export default calculateProgress;
