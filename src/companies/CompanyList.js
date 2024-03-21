import React, { useState, useEffect } from "react";
import JoblyApi from "../api/api";
import SearchForm from "../common/SearchForm";
import CompanyCard from "./CompanyCard";
import Loading from "../common/Loading";


function CompanyList() {
    const [companies, setCompanies] = useState(null)

    async function search(name) {
        let companies = await JoblyApi.getCompanies(name);
        setCompanies(companies)
    }

    useEffect(function getCompaniesOnMount() {
        search();
    }, [])

    if (!companies) return <Loading />

    return (
        <>
            <SearchForm searchFor={search} />
            {companies.length
                ? (<div>
                    {companies.map(c => (
                        <CompanyCard
                            key={c.handle}
                            handle={c.handle}
                            name={c.name}
                            description={c.description}
                            logoUrl={logoUrl}
                        />
                    ))}
                </div>
                ) : (<p>Sorry, no results were found</p>)}
        </>
    )
}

export default CompanyList