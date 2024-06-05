import { useEffect } from "react";
import  useStepperContext  from "../contexts/StepperContext";
export default function PersonalDetails({formData,setFormData}) {
    const { userData, setUserData } = useStepperContext();

    const handleChange = (e) => {
      const { name, value } = e.target;
      //setUserData({ ...userData, [name]: value });
      setFormData({...formData, [name]: value });
      console.log(formData);
    };
    return (
        <div>
            <div className="mt-5 mx-8 font-Heebo">
                <label  class="block font-normal text-xl ">Your Name</label>
                <div class="w-full flex flex-row font-Heebo">
                    <input type="text" class="mr-2 w-64 p-6 h-11 border-[1px] border-borderColor rounded-md 
                        placeholder:w-20 placeholder:font-normal" placeholder="First Name"
                        onChange={handleChange}
                        value={formData["FirstName"] ||  ""}
                        name="FirstName"
                    />
                    <input type="text"  class="w-[210px]  p-6 h-11 border-[1px] border-borderColor rounded-md
                        placeholder:w-20 placeholder:font-normal" placeholder="Last Name"
                        onChange={handleChange}
                        value={formData["LastName"] || ""}
                        name="LastName"
                    />
                </div>
            </div>
            <div className="mt-5 mx-8 font-Heebo">
                <label for="brand" class="block font-normal text-xl ">Email Address</label>
                <input type="email" id="brand" class="mr-2 w-99 p-6  h-11 border-[1px] border-borderColor rounded-md 
                        placeholder:w-40 placeholder:font-normal " placeholder="abc@gmail.com"
                    onChange={handleChange}
                    value={formData["mail"] || ""}
                    name="mail"
                />
            </div>
            <div className="mt-5 mx-8 font-Heebo">
                <label for="brand" class="block font-normal text-xl ">Password</label>
                <input type="email" id="brand" class="mr-2 w-99 p-6  h-11 border-[1px] border-borderColor rounded-md 
                        placeholder:w-40 placeholder:font-normal " placeholder="password"
                    onChange={handleChange}
                    value={formData["password"] || ""}
                    name="password"
                />
            </div>
            <div className="mt-5 mx-8 font-Heebo">
                <label for="brand" class="block font-normal text-xl ">Phone Number</label>
                <input type="email" id="brand" class="mr-2 w-99 h-11 p-6 border-[1px] border-borderColor rounded-md 
                        placeholder:w-20 placeholder:font-normal " placeholder="123456789"
                    onChange={handleChange}
                    value={formData["phoneNumber"] || ""}
                    name="phoneNumber"
                />
            </div>
            <div className="mt-5 mx-8 font-Heebo">
                <div className="flex justify-between w-99">
                    <label for="brand" class="block font-normal text-xl ">Age</label>
                    <p className="font-light text-xl ">Optional</p>
                </div>
                <input type="number" id="brand" class="mr-2 w-99 h-11 p-6 border-[1px] border-borderColor rounded-md 
                        placeholder:w-20 placeholder:font-normal placeholder:pl-6" placeholder="29"
                    onChange={handleChange}
                    value={formData["age"] || ""}
                    name="age"
                />
            </div>
        </div>
    );
}