import TagsComponenet from "./TagsComponenet";
//totalCompanies
//totalJobs
export default function JobComponent({jobObject}) {
    return (
        <div>
            <div className="p-5 border-[1px] border-borderColor rounded-[10px] shadow-md min-w-max ml-[170px] mr-[200px] flex justify-between">
                <div class="flex flex-col">
                    <p class="mb-3 text-lg font-medium font-Heebo">{jobObject.companyName}</p>
                    <p class="mb-2 text-2xl font-medium font-Heebo">{jobObject.roleName}</p>
                    <div class="flex flex-row gap-3 mb-8">
                        {jobObject.skills.map(skill =>(
                          <span className="min-w-[92px] h-[31px] border-[1px] border-borderColor text-center text-lg">{skill}</span>
                        ))}
                    </div>
                    <div class="mb-3 flex gap-4">
                        <span>{jobObject.city}{jobObject.country}</span>
                        <span>{jobObject.employeesCount}emplyees</span>
                        <span>{jobObject.industry}</span>
                        <span>{jobObject.jobType}</span>
                    </div>
                    <div class="p-1 flex flex-row gap-12 text-lg">
                        <div className="flex flex-row items-center gap-1">
                            <img className="w-[17px] h-[15px]" src="./src/assets/remote.jpg" alt="" />
                            <span>{jobObject.isRemote === "1" ? "Remote" : "On Site"}</span>
                        </div>
                        <div className="flex flex-row items-center gap-1">
                            <img className="w-[25px] h-[25px]" src="./src/assets/timer.jpg" alt="" />
                            <span>{jobObject.postTime}</span>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col justify-between items-center">
                    {/* <img className=""src="./src/assets/bookmark-logo.jpg" alt="" class="bookmark-logo"/> */}
                    <img className="w-[76px] h-[68px]" src={jobObject.companyLogo} alt="" class="x-logo" />
                    <img className="w-[33px] h-[30px]" src="./src/assets/next_arrow.jpg" alt="" class="next-logo" />
                </div>
            </div>
        </div>
    );
}