import JobNavbar from "../jobComponents/JobNavbar";
import { useState } from "react";
export default function JobDescription(){
    const [saved, setSaved] = useState(false);

    const handleClick = () => {
      setSaved(!saved); // Toggle the saved state
    };
    return(
        <div>
            <JobNavbar/>
            
            <div className="border-[1px] border-[#000000] mx-14 h-svh mt-24">
            <div className="ml-3 flex flex-row items-center">
            <svg width="42" height="39" viewBox="0 0 42 39" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M35 17.875H13.7025L23.485 8.79125L21 6.5L7 19.5L21 32.5L23.4675 30.2087L13.7025 21.125H35V17.875Z" fill="black"/>
</svg>
<div className="font-normal text-2xl">Go Back</div>
            </div>
                <div className="flex flex-row h-[202px] mx-[50px] mt-3  border-[1px] border-[#00000033] gap-24">
                    <div className="w-[120px] h-[112px] flex flex-col justify-center items-center mt-3 mr-3">
                        <img className="w-[52px] h-[52px]" src="./src/assets/company-logo.jpg" alt="" class="x-logo" />
                        <div className="text-2xl font-normal ">Zohosed</div>
                    </div>
                    <div className="w-[300px] h-[182px] border-[#0000001A] border-[1px]  mt-3 flex flex-col justify-evenly">
                        <div className="justify-evenly">
                            <div className="font-Heebo text-3xl font-normal pl-2">Software Developer</div>
                            <div className="font-Heebo text-2xl font-normal mt-5 pl-2">Chennai, India</div>
                        </div>
                        <div className="mt-6">
                            <div className="flex flex-row justify-evenly">
                            <button className="bg-landingGreen rounded-[5px] font-Heebo text-2xl text-bodyWhite font-normal w-[106px] h-8 mr-6 align-middle">
                                Apply </button>
                            <div className="flex flex-row" onClick={handleClick}>
                            <svg width="28" height="32" viewBox="0 0 28 32" fill={saved ? 'green' : 'none'} xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_552_594)">
          <path d="M6 27.5V3.5C6 2.675 6.252 1.969 6.756 1.382C7.26 0.795 7.86514 0.501 8.57143 0.5H21.4286C22.1357 0.5 22.7413 0.794 23.2453 1.382C23.7493 1.97 24.0009 2.676 24 3.5V27.5L15 23L6 27.5ZM8.57143 22.925L15 19.7L21.4286 22.925V3.5H8.57143V22.925Z" fill={saved ? 'green' : '#207884'} />
        </g>
        <defs>
          <clipPath id="clip0_552_594">
            <rect width="28" height="31" fill="white" transform="translate(0 0.5)" />
          </clipPath>
        </defs>
      </svg>
      <div>{saved ? 'Saved' : 'Save'}</div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[250px] h-[182px] mt-3 ml-80 flex flex-row justify-between">
                        <div className=" flex flex-col items-start h-full justify-evenly ml-">
                            <div className="font-Heebo font-medium text-2xl items-center">Date Posted </div>
                            <div className="font-Heebo font-medium text-2xl items-center">Work site</div>
                            <div className="font-Heebo font-medium text-2xl items-center">Role type</div>
                        </div>
                        <div className=" flex flex-col items-start h-full justify-evenly">
                            <div className="font-Heebo text-xl font-normal items-center">Mar 25,2024</div>
                            <div className="font-Heebo text-xl font-normal items-center">Remote</div>
                            <div className="font-Heebo text-xl font-normal items-center">Full-time</div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row">
                    <div>
                        <div className="flex flex-col justify-between w-[655px]">
                            <div className="font-medium text-2xl">Overview</div>
                            <ul className="">
                                <li className="font-Heebo font-normal text-2xl">A product designer is responsible for the user experience of a product, usually taking direction 
                                on the business goals and objectives from product management.
                                 Although typically associated with the visual/tactile aspects of a product, product designers can sometimes also play a role in the information 
                                 architecture and system design of a product as well.</li>
                            </ul>
                            <hr className="text-[#0000004D]"></hr>
                        </div>
                        <div>
                            <div className="font-medium text-2xl">Responsibilities</div>
                            <div></div>
                        </div>
                        <button></button>
                    </div>
                    <div>
                        <div>
                            <div className="font-medium text-2xl">Skills required</div>
                        </div>
                        <div>
                            <div className="font-medium text-2xl">Qualification</div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}



// export default function description(){
//     return(
        
//     );
// }