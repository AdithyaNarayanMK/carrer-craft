
const StepperControl = ({handleClick,currentStep,steps}) =>{
    return(
        <div className="container flex justify-around mt-4 mb-8">
            <button 
            onClick={ () => handleClick()}
            className={`bg-landingGreen text-bodyWhite rounded-[10px] font-HeadlandOne font-normal 
            cursor-pointer w-[128px] h-10 transition duration-200
            ${currentStep == 1 ? "opacity-75 cursor-not-allowed" : ""}`}>
                Back
            </button>

            <button 
            // onClick={() => handleClick("next")}
            onClick={() => handleClick(currentStep === steps.length ? "submit" : "next")}
            className={`bg-landingGreen text-bodyWhite rounded-[10px] font-HeadlandOne font-normal 
            cursor-pointer w-[128px] h-10 transition duration-200`}>
                {currentStep == steps.length  ? "Submit": "Next"}
            </button>
        </div>
    );
}
 
const sendRequest = () => {
    console.log("Hello World")
}


export default StepperControl;