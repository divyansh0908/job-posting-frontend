import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import JobCard from "../component/JobCard";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { listJobs } from "../api/listjobs";

function ListJobPage() {
  const navigate = useNavigate();
  const { user, userType } = useAuth();

  const [jobList, setJobList] = useState([]);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    const getJobs = async () => {
      const { data, err } = await listJobs(userType);
      console.log(data);
      if (err) {
        alert("Error in fetching jobs");
      } else {
        setJobList(data.jobs);
        console.log(data);
      }
    };
    getJobs();
  }, []);

  return (
    <div>
      {jobList && (
        <div className="flex flex-wrap">
          {jobList.map((job) => (
            <div className="w-1/3 p-2">
              <JobCard title={job.title}
                description={job.description}   


                location={job.location}
                phone={job.mobile}

               />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ListJobPage;
