import React, { useState } from "react";


function SearchForm(searchFor) {
    const [searchTerm, setSearchTerm] = useState("")

    function handleSubmit(evt) {
        evt.preventDefault();
        searchFor(searchTerm.trim() || undefined);
        setSearchTerm(searchTerm.trim())
    }

    function handleChange(evt) {
        setSearchTerm(evt.target.value);
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input name="searchTerm"
                    placeholder="Enter Search Term"
                    value={searchTerm}
                    onChange={handleChange}
                />
                <button type="submit"></button>
            </form>
        </>
    )
}

export default SearchForm