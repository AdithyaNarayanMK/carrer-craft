import useStepperContext from "../contexts/StepperContext";
import Select from 'react-select'
import React, { useEffect, useRef ,useState } from 'react';


export default function EducationalDetails({formData,setFormData}) {
    // const { userData, setUserData } = useStepperContext();
    const customStyles = {
        control: (provided, state) => ({
          ...provided,
          height: '44px', 
          marginRight: '8px', 
          border :'1px soild #1A000080'
        })
      };
    const skillsOptions = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ];
      const [selectedOptions, setSelectedOptions] = useState([]);
    //   const handleSelectChange = (selected) => {
    //     setSelectedOptions(selected);
    //   };
    const handleSelectChange = (selected) => {
        setSelectedOptions(selected);
        const selectedSkills = selected.map(option => option.value);
        setFormData(prevUserData => ({
            ...prevUserData,
            skills: selectedSkills
        }));
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        // setUserData({ ...userData, [name]: value });
        setFormData({...formData, [name]: value });
      console.log(formData);
    };
    return (

        <div>
            <div className="mt-5 mx-8 font-Heebo">
                <label for="brand" class="block font-normal text-xl ">Highest Qualification</label>
                <input type="text" class="mr-2 w-99 h-11 border-[1px] border-borderColor rounded-md 
                        placeholder:w-40 placeholder:font-normal p-6" placeholder="B.E"
                    onChange={handleChange}
                    value={formData["HighestQualifiction"] || ""}
                    name="HighestQualifiction"
                />
            </div>
            <div className="mt-5 mx-8 font-Heebo">
                <label for="brand" class="block font-normal text-xl ">Latest Degree</label>
                <input type="text" class="mr-2 w-99 h-11 border-[1px] border-borderColor rounded-md 
                        placeholder:w-20 placeholder:font-normal p-6" placeholder="M.E"
                    onChange={handleChange}
                    value={formData["LatestDegree"] || ""}
                    name="LatestDegree"
                />
            </div>
            <div className="mt-5 mx-8 font-Heebo">
                <label for="brand" class="block font-normal text-xl ">Stream</label>
                <input type="email" class="mr-2 w-99 h-11 border-[1px] border-borderColor rounded-md 
                        placeholder:w-20 placeholder:font-normal p-6" placeholder="CSE"
                    onChange={handleChange}
                    value={formData["Stream"] || ""}
                    name="Stream"
                />
            </div>
            <div className="mt-5 mx-8 font-Heebo">
                <label  class="block font-normal text-xl ">Area Of Interest</label>
                <input type="email" class="mr-2 w-99 h-11 border-[1px] border-borderColor rounded-md 
                        placeholder:w-28 placeholder:font-normal p-6" placeholder="Development"
                    onChange={handleChange}
                    value={formData["AreaOfinterest"] || ""}
                    name="AreaOfinterest"
                />
            </div>
            <div className="mt-5 mx-8 font-Heebo">
                <label  className="block font-normal text-xl ">Skills Set</label>
                    <Select
                        isMulti
                        name="skills"
                        options={skillsOptions}
                        className="basic-multi-select "
                        styles={customStyles}
                        classNamePrefix="select"
                        value={selectedOptions} // Set the selected value
                        onChange={handleSelectChange} // Pass the event handler
                    />

            </div>

        </div>
    );
    
}