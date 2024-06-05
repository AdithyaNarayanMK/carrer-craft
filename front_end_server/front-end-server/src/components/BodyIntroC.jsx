import { Link } from 'react-router-dom';
export default function BodyIntroC() {
    return (
        <>
            <div className="bg-landingGreen max-h-screen">
                <div className="flex justify-center px-16 py-16">
                    <div className=" text-bodyWhite py-28 w-100 pr-11">
                        <div className="font-HeadlandOne text-4xl w-100 h-24">
                            Find the right Career/Job for yourself</div>
                        <div className="font-Heebo w-100 h-24 font-normal text-2xl">
                            Enter your past Career and your Area Of Interest<br></br>
                            We will find the Right Career for you!!<br></br>
                            Start by Updating Your Profile.
                        </div>
                        <div className="text-center px-30 pt-8">
                            <Link to="/users">
                                <button className="w-64 h-12 gap-3 bg-bodyWhite rounded-lg font-HeadlandOne text-2xl text-black font-normal">
                                    Create Profile
                                </button>
                            </Link>

                        </div>
                    </div>
                    <div className="pl-10">
                        <img src="./src/assets/landing.png"></img>
                    </div>
                </div>

            </div>
        </>
    );
}