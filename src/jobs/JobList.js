import React, { useState, useEffect } from "react";
import Search from "..common/SearchForm";
import JoblyApi from "../api/api"
import JobCardList from "./JobCardList";
import Loading from "..common/Loading";

function JobList() {
    const [jobs, setJobs] = useState(null);

    async function search(title) {
        let jobs = await JoblyApi.getJobs(title);
        setJobs(jobs);
    }

    useEffect(function getAllJobsOnMount() {
        search();
    }, [])

    if (!jobs) return <Loading />

    return (
        <div className="JobList col-md-8 offset-md-2">
            <Search searchFor={search} />
            {jobs.length ?
                <JobCardList jobs={jobs} /> :
                <p className="lead">Sorry, no results were found</p>}
        </div>
    )
}

export default JobList