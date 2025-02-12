import { useState } from "react";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export default function ReferModal({ onClose }) {
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

    // Major options and corresponding niche courses
    const majorOptions = {
        "data-science": [
            "Machine Learning",
            "Deep Learning",
            "Natural Language Processing",
            "Data Analytics",
            "Big Data",
        ],
        "robotics": [
            "AI",
            "Control Systems",
            "Automation",
            "Mechatronics",
            "Embedded Systems",
        ],
        "machine-learning": [
            "Computer Vision",
            "NLP",
            "Reinforcement Learning",
            "Predictive Analytics",
            "TensorFlow",
        ],
    };

    // Handle major change and update corresponding niche courses
    const handleMajorChange = (e) => {
        const selectedMajor = e.target.value;
        setMajor(selectedMajor);
        setNicheCourses(majorOptions[selectedMajor] || []);
        setNicheCourse(""); // Reset niche course when major is changed
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Calculate form progress based on fields filled
    const calculateProgress = () => {
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

    const nextPage = () => setPage((prev) => prev + 1);
    const prevPage = () => setPage((prev) => prev - 1);
    const progress = calculateProgress();


return (
    <>
    {/* Overlay */}
    <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
        <div className="fixed inset-5 lg:w-5/6 w-11/12 mx-auto flex justify-center border-0 lg:rounded-tr-[5vw] rounded-tr-[10vw] rounded-bl-[3vw] border-solid border-blue-500 max-h-11/12 items-center z-50 overflow-hidden">
            <div className="relative bg-white overflow-hidden p-5 lg:rounded-tr-[5vw] rounded-tr-[10vw]  rounded-bl-[3vw]">
         
            
        <div className="relative  bg-white  overflow-hidden p-5">
            <div className='p-2 flex justify-center items-center m-4 lg:mt-20 mt-10'>
                <hr className='bg-gradient-to-r from-blue-400 to-blue-500 border-0 rounded-lg h-1 lg:w-20 w-15'/>
                <h1 className="text-blue-500 roboto-black lg:text-[2rem] text-[1.2rem] text-nowrap mx-4">REFER NOW</h1>
                <hr className='bg-gradient-to-r from-blue-400 to-blue-500 border-0 rounded-lg h-1 lg:w-20 w-15'/>
            </div>

            <button onClick={onClose} className='text-blue-500 cursor-pointer font-semibold text-4xl absolute lg:top-30 top-5 lg:right-10 right-5'> &times;</button>
               
               

                <form className="lg:w-5/6 w-11/12 relative">
                    <div className='flex'>
                        <img src="/form image1.png" width={300} height={300} alt='img1' className='w-1/2 lg:block hidden'/>
                        <div>

                            <div className="flex justify-center items-center space-x-1">
                                {/* Progress Bar */}
                                <div className="w-full bg-gray-200 rounded-full h-1 mt-1 mb-4">
                                    <div
                                        className="bg-blue-500 h-1 rounded-full"
                                        style={{ width: `${calculateProgress()}%` }}
                                    ></div>
                                </div>

                               {/* Check Icon when progress is 100% */}
                                {progress === 100 && (
                                    <div className="flex justify-center items-center space-x-1 mb-4">
                                        <CheckCircleOutlineIcon className="text-green-500 scale-125 font-semibold" />
                                    </div>
                                )}
                            </div>

                            {page === 1 && (
                                <>
                                    <h1 className="text-blue-400 lg:text-[1.3rem] text-lg">Your Details</h1>
                                    <div className="md:flex block md:space-x-10 space-x-0 my-2">
                                        <input 
                                            className="border-b border-gray-600 hover:border-blue-400 w-full mt-1 outline-none placeholder-gray-400" 
                                            type="text" 
                                            placeholder="First Name *" 
                                            id="yourFirstName" 
                                            name="yourFirstName"
                                            value={formData.yourFirstName}
                                            onChange={handleChange}
                                        />
                                        <input 
                                            className="border-b border-gray-600 hover:border-blue-400 w-full md:mt-1 mt-5  outline-none placeholder-gray-400" 
                                            type="text" 
                                            placeholder="Last Name *" 
                                            id="yourLastName" 
                                            name="yourLastName"
                                            value={formData.yourLastName}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="md:flex block md:space-x-10 space-x-0 lg:my-8 my-4">
                                        <input 
                                            className="border-b border-gray-600 hover:border-blue-400 w-full mt-1 outline-none placeholder-gray-400" 
                                            type="email" 
                                            placeholder="Email Address *" 
                                            id="yourEmail" 
                                            name="yourEmail"
                                            value={formData.yourEmail}
                                            onChange={handleChange}
                                        />
                                        <input 
                                            className="border-b border-gray-600 hover:border-blue-400 w-full md:mt-1 mt-5 outline-none placeholder-gray-400" 
                                            type="tel" 
                                            placeholder="Phone Number *" 
                                            id="yourPhone" 
                                            name="yourPhone"
                                            value={formData.yourPhone}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className='flex w-full lg:my-0 my-2'>
                                        <input type='checkbox' id='check' name='check' className='w-4 -mt-10'/>
                                        <p className='mx-5 lg:text-lg text-sm text-gray-400 w-5/6 xlllll:text-xl xlllll:w-2/3'>
                                            By filling this form, you authorize us to contact you via Email, Phone, or any other mode of 
                                            communication for processing this referral.
                                        </p>
                                    </div>

                                    <button 
                                        type="button" 
                                        onClick={nextPage} 
                                        className="bg-blue-500 px-6 my-4 cursor-pointer text-white p-2 rounded-sm"
                                    >
                                        Next
                                    </button>
                                </>
                            )}
                            {page === 2 && (
                                <>
                                    <h1 className="text-blue-400 lg:text-[1.3rem] text-lg">Your Friend's Details</h1>
                                    <div className="md:flex block md:space-x-10 space-x-0 my-2">
                                        <input 
                                            className="border-b border-gray-600 hover:border-blue-400 w-full mt-1 outline-none placeholder-gray-400" 
                                            type="text" 
                                            placeholder="Friend's First Name *" 
                                            id="friendFirstName" 
                                            name="friendFirstName"
                                            value={formData.friendFirstName}
                                            onChange={handleChange}
                                        />
                                        <input 
                                            className="border-b border-gray-600 hover:border-blue-400 w-full md:mt-1 mt-5  outline-none placeholder-gray-400" 
                                            type="text" 
                                            placeholder="Friend's Last Name *" 
                                            id="friendLastName" 
                                            name="friendLastName"
                                            value={formData.friendLastName}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="md:flex block md:space-x-10 space-x-0 lg:my-8 my-4">
                                        <input 
                                            className="border-b border-gray-600 hover:border-blue-400 w-full mt-1 outline-none placeholder-gray-400" 
                                            type="email" 
                                            placeholder="Friend's Email Address *" 
                                            id="friendEmail" 
                                            name="friendEmail"
                                            value={formData.friendEmail}
                                            onChange={handleChange}
                                        />
                                        <input 
                                            className="border-b border-gray-600 hover:border-blue-400 w-full md:mt-1 mt-5 outline-none placeholder-gray-400" 
                                            type="tel" 
                                            placeholder="Friend's Phone Number *" 
                                            id="friendPhone" 
                                            name="friendPhone"
                                            value={formData.friendPhone}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    {/* Course Selection */}
                                    <div className="my-8">
                                        <label htmlFor="main-major" className="block text-blue-400">Select Your Friend's Major</label>
                                        <select
                                             id="main-major"
                                             name="main-major"
                                             className="border-b border-gray-600 hover:border-blue-400 w-full mt-1 outline-none"
                                             onChange={handleMajorChange}
                                             value={major}
                                        >
                                            <option value="">Select Major</option>
                                            <option value="data-science">Data Science</option>
                                            <option value="robotics">Robotics</option>
                                            <option value="machine-learning">Machine Learning</option>
                                        </select>
                                    </div>

                                    {major && (
                                    /* Niche Course Selection */
                                    <div className="my-8">
                                        <label htmlFor="niche-course" className="block text-blue-400">
                                            Select Niche Course
                                        </label>
                                        <select
                                            id="niche-course"
                                            name="niche-course"
                                            className="border-b border-gray-600 hover:border-blue-400 w-full mt-1 outline-none"
                                            value={nicheCourse}
                                            onChange={(e) => setNicheCourse(e.target.value)}
                                            disabled={!major}
                                        >
                                            <option value="">Select Course</option>
                                            {nicheCourses.map((course, index) => (
                                                <option key={index} value={course}>
                                                    {course}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    )}

                               

                                    <div className="flex space-x-4">
                                        <button 
                                            type="button" 
                                            onClick={prevPage} 
                                            className="bg-gray-400 px-4 cursor-pointer text-white p-2 rounded-sm"
                                        >
                                            Back
                                        </button>
                                        <button 
                                            type="submit" 
                                            className="bg-blue-500 px-4 cursor-pointer text-white p-2 rounded-sm"
                                        >
                                            Refer
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>
                        <img src="/form image2.png" width={400} height={400} alt='img1' className='absolute bottom-10 right-[-12vw] w-1/3 scale-x-[-1] lg:block hidden'/>
                    </div>
                </form>
        </div>
        </div>
    </div>
    </>
    );
}