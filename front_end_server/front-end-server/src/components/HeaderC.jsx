export default function HeaderC() {
    return (
        <div className="">
            <div className=" bg-landingGreen font-HeadlandOne ">
                <nav className="flex justify-between">
                    <p className="text-bodyWhite  font-normal text-5xl px-4 py-4">
                        CareerCraft</p>
                    <div className=" pl-6 pr-8 py-5">
                        <button className="bg-gettingButtom w-52 h-12 rounded-3xl font-normal text-2xl">
                            Getting Started</button>
                        <button className="text-bodyWhite pl-14 font-normal text-2xl">
                            Login</button>
                    </div>
                </nav>
            </div>
            <div className="border border-bodyWhite"></div>
        </div>
    );
}