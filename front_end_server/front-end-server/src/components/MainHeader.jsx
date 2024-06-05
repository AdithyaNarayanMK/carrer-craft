export default function MainHeader() {
    return (
        <nav className="bg-landingGreen text-bodyWhite font-HeadlandOne h-[86px]">
            <div className="w-full flex flex-wrap items-center justify-between mx-auto">
                <span className=" text-5xl font-normal whitespace-nowrap pl-6">CarrerCraft</span>
                <div className="hidden w-full md:block md:w-auto">
                    <ul className="font-normal font-HeadlandOne flex flex-row text-2xl">
                        <li>
                            <p className="block p-7 rounded ">Job Hunt</p>
                        </li>
                        <li>
                            <p className="block p-7  rounded ">Carrer Guidance</p>
                        </li>
                        <li>
                            <p className=" p-7 rounded">Login</p>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}
// md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700