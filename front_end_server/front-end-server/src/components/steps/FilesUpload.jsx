import { useState,useEffect } from "react";
import useStepperContext from "../contexts/StepperContext";
export default function FilesUpload({formData,setFormData}) {
    //const { userData, setUserData } = useStepperContext();
    // const [files, setFiles] = useState(null);
    // const [portfolioFile, setPortfolioFile] = useState(null);
    // const [resumeFile , setResumeFile] = useState(null);
    const handleChangeResume = (e) => {
        let selectedFile = e.target.files[0];
        console.log("Selected file:", selectedFile);
        setFormData({...formData,resumeFile : selectedFile});
    };

    const handleChangePortfolio = (e) => {
        const selectedFile = e.target.files[0];
        console.log("Selected file:", selectedFile);
        setFormData({...formData,portfolioFile : selectedFile});
    };
    return (
        <div className="flex flex-col w-full items-center mt-[70px] font-Heebo">
            <div className="flex flex-col">
                <label className="font-normal text-xl">Resume</label>
                <label for="dropzone-file" class="flex flex-col items-center justify-center border-[1px] border-[#0000004D] rounded-lg cursor-pointer">
                    <div class="flex flex-col items-center justify-center pt-5 pb-6  w-[480px] h-[110px] ">
                        <svg width="49" height="36" viewBox="0 0 49 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26.2161 35.5V25.5H33.0738L24.5017 15.5L15.9297 25.5H22.7873V35.5H14.2153V35.4167C13.9272 35.4333 13.6529 35.5 13.3581 35.5C9.94789 35.5 6.67739 34.183 4.26604 31.8388C1.85468 29.4946 0.5 26.3152 0.5 23C0.5 16.5867 5.48893 11.36 11.8905 10.6433C12.4518 7.79098 14.0179 5.2179 16.3196 3.36666C18.6212 1.51543 21.5145 0.50176 24.5017 0.5C27.4894 0.501626 30.3831 1.51518 32.6853 3.36637C34.9875 5.21756 36.5543 7.7907 37.1163 10.6433C43.5179 11.36 48.5 16.5867 48.5 23C48.5 26.3152 47.1453 29.4946 44.734 31.8388C42.3226 34.183 39.0521 35.5 35.6419 35.5C35.3539 35.5 35.0762 35.4333 34.7847 35.4167V35.5H26.2161Z" fill="black" fill-opacity="0.44" />
                        </svg>
                        <p class="mb-2 text-sm text-[#918888]"><span class="font-normal">Upload your File here</span> or drag and drop</p>
                        <p class="text-sm text-[#918888]">Supported Formats PDF Only</p>
                    </div>
                    <input id="resume-file" type="file" onChange={handleChangeResume} accept=".pdf" />
                </label>
            </div>
            <div className="flex flex-col mt-[50px]">
                <div className="flex justify-between">
                    <label className="font-normal text-xl">Portfolio</label>
                    <p className="font-normal text-xl ">Optional</p>
                </div>
                <label for="dropzone-file" class="flex flex-col items-center justify-center border-[1px] border-[#0000004D] rounded-lg cursor-pointer">
                    <div class="flex flex-col items-center justify-center pt-5 pb-6  w-[480px] h-[110px] ">
                        <svg width="49" height="36" viewBox="0 0 49 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26.2161 35.5V25.5H33.0738L24.5017 15.5L15.9297 25.5H22.7873V35.5H14.2153V35.4167C13.9272 35.4333 13.6529 35.5 13.3581 35.5C9.94789 35.5 6.67739 34.183 4.26604 31.8388C1.85468 29.4946 0.5 26.3152 0.5 23C0.5 16.5867 5.48893 11.36 11.8905 10.6433C12.4518 7.79098 14.0179 5.2179 16.3196 3.36666C18.6212 1.51543 21.5145 0.50176 24.5017 0.5C27.4894 0.501626 30.3831 1.51518 32.6853 3.36637C34.9875 5.21756 36.5543 7.7907 37.1163 10.6433C43.5179 11.36 48.5 16.5867 48.5 23C48.5 26.3152 47.1453 29.4946 44.734 31.8388C42.3226 34.183 39.0521 35.5 35.6419 35.5C35.3539 35.5 35.0762 35.4333 34.7847 35.4167V35.5H26.2161Z" fill="black" fill-opacity="0.44" />
                        </svg>
                        <p class="mb-2 text-sm text-[#918888]"><span class="font-normal">Upload your File here</span> or drag and drop</p>
                        <p class="text-sm text-[#918888]">Supported Formats PDF Only</p>
                    </div>
                    <input id="portfolio-file" type="file" onChange={handleChangePortfolio} accept=".pdf" />
                </label>
            </div>
        </div>
    );
}