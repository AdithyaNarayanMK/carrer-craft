import { Link } from "react-router-dom";

export default function FeaturesIntro() {
    return (
        <div className="grid grid-flow-col-dense">
            <div className="grid grid-flow-row-dense pl-4 w-full">
                <div className="grid text-center font-HeadlandOne text-4xl font-normal text-black w-99 h-23 pl-44 pt-24">
                    What can You do at CareerCraft?
                </div>
                <div className="grid w-105 h-80 pl-32 pt-24">
                    <img src="./src/assets/carrer.png"></img>
                </div>
                <div className="grid text-center  h-32 gap-6 pl-18">
                    <div className="font-HeadlandOne font-normal text-3xl text-center text-black pt-40 w-105">
                        Find the Right Job for your skill
                    </div>
                    <div className="font-Heebo font-normal text-2xl text-center w-105 h-24 ml-4">
                        Enter your Qualification details or simply upload your resume and add your Interested Sectors,
                        We will make sure you land in your dream Job
                    </div>
                    <div className="pt-8 pl-40 pr-44">
                        <Link to="/users">
                            <button className="bg-landingGreen rounded-lg font-HeadlandOne text-2xl text-bodyWhite font-normal w-[220px] h-8">
                                Explore Jobs </button></Link>
                    </div>
                    <div className="pt-20 border-b-2 border-landingGreen" />
                </div>

                <div className="w-100 h-80 gap-2 pt-99 ml-36">
                    <img src="./src/assets/mentor.png"></img>
                </div>
            </div>
            <div className="grid grid-flow-row-dense pl-32 w-full">
                <div className="h-32 gap-6 pl-28 pt-6">
                    <div className="font-HeadlandOne font-normal text-3xl text-center text-black pt-60 w-105 pr-35">
                        Find Your Next Step of Career
                    </div>
                    <div className="font-Heebo font-normal text-2xl text-center w-[520px] h-16 pt-6 pl-12">
                        Enter your past Career and your Area Of Interest We will find the Right Career for you!!
                    </div>
                    <div className="text-center pt-20 pr-16">
                        <button className="bg-landingGreen rounded-lg font-HeadlandOne text-2xl text-bodyWhite font-normal w-[220px] h-8">
                            Explore Careers
                        </button>
                    </div>
                    <div className="pt-20 border-b-2 border-landingGreen" />
                </div>
                <div className="w-100 h-72  gap-2 pt-105 pb-80 ml-[85px]">
                    <img src="./src/assets/job.png"></img>
                </div>
                <div className="h-32 gap-6 pt-24">
                    <div className="text-center font-HeadlandOne text-3xl font-normal text-black w-105 h-20 px-[70px] mx-[70px]">
                        Find the right mentor to Improve your Career
                    </div>
                    <div className="font-Heebo font-normal text-2xl text-center w-[520px] h-16 pt-6 ml-[80px]  pl-[45px]">
                        Choose a mentor to guide you into your Journey of Career
                    </div>
                    <div className="text-center pt-16 pr-24 pl-6">
                        <button className="bg-landingGreen rounded-lg font-HeadlandOne text-2xl text-bodyWhite font-normal w-[220px] h-8 ml-[120px]">
                            Explore Mentors
                        </button>
                    </div>
                    <div className="mt-12 border-b-2 border-landingGreen" />
                </div>
            </div>
        </div>
    );
}