import JobHeader from "../jobComponents/JobHeader";
import JobNavbar from "../jobComponents/JobNavbar";
import JobComponent from "../jobComponents/JobComponent";
import JobFilter from "../jobComponents/JobFilter";
export default function jobsPage(){
    return(
        <div className="">
            <JobNavbar/>
            <JobHeader/>
            <JobFilter/>
            {/* <JobComponent/> */}
        </div>
    );
}