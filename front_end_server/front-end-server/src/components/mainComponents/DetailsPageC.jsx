import MainHeader from "../MainHeader";
import Stepper from "../Stepper";
import StepperControl from "../StepperControl";
import PersonalDetails from "../steps/PersonalDetails";
import EducationalDetails from "../steps/EducatinalDetails";
import FilesUpload from "../steps/FilesUpload";
import { UseContextProvider } from "../contexts/StepperContext";
import  useStepperContext  from "../contexts/StepperContext";
import { useState,useEffect } from "react";
import axios from "axios"; 

export default function DetailsPageC() {
  const [formData, setFormData] = useState({});
   // const { userData, setUserData } = useStepperContext();
    const [currentStep, setCurrentStep] = useState(1);
    const steps = [
        "Personal Details",
        "Educational details",
        "Files Upload"
    ];
  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <PersonalDetails formData={formData} setFormData = {setFormData}/>;
      case 2:
        return <EducationalDetails formData={formData} setFormData = {setFormData}/>;
      case 3:
        return <FilesUpload formData={formData} setFormData = {setFormData}/>;
      default:
        return null;
    }
  };

    const handleClick = (direction) => {
        // let newStep = currentStep;
        // direction == "next" ? newStep++ : newStep--;
        // newStep > 0 && newStep <= steps.length  && setCurrentStep(newStep);
        if (direction === "next") {
            let newStep = currentStep + 1;
            if (newStep <= steps.length) {
                setCurrentStep(newStep);
            }
        }else if (direction === "submit") {
            console.log("submit click");
            console.log(formData);
            JSON.stringify(formData);
            // console.log(jsonData);
            axios({ 
              // Endpoint to send files 
              url: "http://localhost:8080/users", 
              method: "POST", 
              // Attaching the form data 
              data: formData, 
            }) 
            .then((res) => { }) // Handle the response from backend here 
      .catch((err) => { }); // Catch errors if any 

        }
    }
    return (
        <div>
            <MainHeader />
            <Stepper
                steps={steps}
                currentStep={currentStep}
            />
            <div className="container flex justify-around mt-4 mb-8 mx-[445px] border-[1px] 
           border-black w-[625px] h-[511px] bg-formBody rounded-xl">
                <UseContextProvider>
                    {displayStep(currentStep)}
                </UseContextProvider>
            </div>
            {currentStep !== steps.length +1  && (
        <StepperControl
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
        />
      )}
        </div>
    );
}