import { useEffect, useRef, useState } from "react";


const Stepper = ({steps,currentStep}) => {

    const [newStep,setNewStep] = useState([]);
    const stepRef = useRef();

    const updateStep = (stepNumber,steps)=>{
        const newSteps = [...steps];
        let count = 0;
        while(count < newSteps.length){
            if(count == stepNumber){
                newSteps[count] = {
                    ...newSteps[count],
                    highlighted:true,
                    selected:true,
                    completed:true,
                };
                count++;
            }
            else if(count < stepNumber){
                newSteps[count] = {
                    ...newSteps[count],
                    highlighted:false,
                    selected:true,
                    completed:true,
                };
                count++;
            }
            else{
                newSteps[count] = {
                    ...newSteps[count],
                    highlighted:false,
                    selected:false,
                    completed:false,
                };
                count++;
            }
        }
        return newSteps;
    };

    useEffect(()=>{
        const stepsState = steps.map((step,index) =>
            Object.assign(
                {},
                {
                description : step,
                completed : false,
                highlighted : index == 0 ? true : false,
                selected : index == 0 ? true : false,
                }
            )
        );

        stepRef.current = stepsState;
        const current = updateStep(currentStep-1,stepRef.current);
        setNewStep(current);

    },[steps,currentStep]);
    const displaySteps = newStep.map((step,index) =>{
        return(
            <div key={index} 
            className={
                index != newStep.length - 1 ? "w-full flex items-center" 
                : "flex items-center"
            }>
            <div className={`bg-bodyWhite text-black flex justify-center items-center w-[178px] h-16 gap-3 
            rounded-xl font-Montserrat font-medium text-xl px-[50px] py-[6px]  border-2 border-borderColor  whitespace-nowrap ${step.selected ? "bg-landingGreen text-bodyWhite" : ""}`}>
                {step.description}
            </div>
            <div className={`flex-auto border-t-2 transition duration-500 ease-in-out 
            ${step.completed ? "border-landingGreen" : "border-borderColor" }`}></div>
        </div>
        );
    });
    return (
        <div className="mx-60 p-10 flex justify-between items-center">
            {displaySteps}
        </div>
    );
};

export default Stepper;