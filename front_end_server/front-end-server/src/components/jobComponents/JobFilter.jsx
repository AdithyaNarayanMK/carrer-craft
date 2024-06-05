import TagsComponenet from "./TagsComponenet";

export default function JobFilter() {
    return (
        <div className="flex flex-col justify-start border-[1px] rounded-lg p-5 min-w-max ml-[170px] mr-[200px] h-80">
            <div className="font-Heebo text-4xl font-medium">
                Filter Jobs by Skills and More
            </div>
            <div className="flex flex-row justify-start mt-6 gap-48">
                <div className="flex flex-col mt-2 ">
                    <label className="font-bold font-Heebo text-base pl-2">ROLES</label>
                    <TagsComponenet placeholder="Enter Your Roles" />
                </div>
                <div className="flex flex-col mt-2">
                    <label className="font-bold font-Heebo text-base pl-2">SKILLS</label>
                    <TagsComponenet placeholder="Enter Your Skills" />
                </div>
                <div className="flex flex-col mt-2">
                    <label className="font-bold font-Heebo text-base pl-2">LOCATION</label>
                    <TagsComponenet placeholder="Enter Your Location" />
                </div>
            </div>
            <div className="flex flex-row justify-start mt-6">
                <div className="flex flex-col mt-2 pl-2">
                    <label className="font-bold font-Heebo text-base">INDUSTRY</label>
                    <TagsComponenet placeholder="Enter Your Industry" />
                </div>
            </div>
            <div className="flex flex-row justify-start mt-6">
                <div className="flex flex-row justify-start basis-52 items-center">
                    <label for="checkRemote" className="bg-bodyWhite w-10 h-5 rounded-full relative cursor-pointer border border-black">
                        <input type="checkbox" id="checkRemote" className="sr-only peer" />
                        <span className="w-2/5 h-4/5 bg-black absolute rounded-full left-[2px] top-[2px]
                    peer-checked:bg-bodyWhite peer-checked:left-5 transition-all duration-500"></span>
                    </label>
                    <div className="ml-3 font-Heebo font-normal text-base">Remote jobs only</div>
                </div>
                <div className="flex flex-row justify-start basis-52 items-center">
                    <label for="checkIntern" className="bg-bodyWhite w-10 h-5 rounded-full relative cursor-pointer border border-black">
                        <input type="checkbox" id="checkIntern" className="sr-only peer" />
                        <span className="w-2/5 h-4/5 bg-black absolute rounded-full left-[2px] top-[2px]
                    peer-checked:bg-bodyWhite peer-checked:left-5 transition-all duration-500"></span>
                    </label>
                    <div className="ml-3 font-Heebo font-normal text-base">Internships only</div>
                </div>
            </div>

            <div>

            </div>
        </div>
    );
}