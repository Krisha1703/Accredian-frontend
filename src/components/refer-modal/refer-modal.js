import useReferForm from "./use-refer-form";
import calculateProgress from "./form-progress";
import ProgressBar from "./progress-bar";
import ReferrerDetails from "./referrer-details";
import RefereeDetails from "./referee-details";
import ModalHeading from "./modal-heading";

export default function ReferModal({ onClose }) {
    const {
        page,
        formData,
        major,
        nicheCourse,
        handleChange,
        handleMajorChange,
        setNicheCourse,
        nicheCourses,
        nextPage,
        prevPage
    } = useReferForm();

    const progress = calculateProgress(formData, major, nicheCourse);

    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>
            
            <div className="fixed inset-5 lg:w-5/6 w-11/12 mx-auto flex justify-center border-0 lg:rounded-tr-[5vw] rounded-tr-[10vw] rounded-bl-[3vw] border-solid border-blue-500 max-h-11/12 items-center z-50 overflow-hidden">
                <div className="relative bg-white overflow-hidden p-5 lg:rounded-tr-[5vw] rounded-tr-[10vw] rounded-bl-[3vw]">

                    <div className="relative  bg-white  overflow-hidden p-5">   
                        <ModalHeading onClose={onClose}/>

                        <form className="lg:w-5/6 w-11/12 relative">
                            <div className='flex'>
                                <img src="/form image1.png" width={300} height={300} alt='img1' className='w-1/2 lg:block hidden'/>

                                <div>
                                    <ProgressBar progress={progress} />
                                    {page === 1 && (
                                        <ReferrerDetails 
                                            formData={formData}
                                            handleChange={handleChange}
                                            nextPage={nextPage}
                                        />
                                    )}

                                    {page === 2 && (
                                        <>
                                            <RefereeDetails 
                                                formData={formData}
                                                handleChange={handleChange}
                                                handleMajorChange={handleMajorChange}
                                                nicheCourse={nicheCourse}
                                                setNicheCourse={setNicheCourse}
                                                major={major}
                                                prevPage={prevPage}
                                                nicheCourses={nicheCourses} 

                                            />
                                        </>
                                    )}

                                    <img src="/form image2.png" width={400} height={400} alt='img1' className='absolute bottom-10 right-[-12vw] w-1/3 scale-x-[-1] lg:block hidden'/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
