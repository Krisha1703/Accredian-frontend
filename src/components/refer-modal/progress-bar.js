import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const ProgressBar = ({ progress }) => {
    return (
        <div className="flex justify-center items-center space-x-1">
            <div className="w-full bg-gray-200 rounded-full h-1 mt-1 mb-4">
                <div
                    className="bg-blue-500 h-1 rounded-full"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>

            {progress === 100 && (
                <div className="flex justify-center items-center space-x-1 mb-4">
                    <CheckCircleOutlineIcon className="text-green-500 scale-125 font-semibold" />
                </div>
            )}
        </div>
    );
};

export default ProgressBar;
