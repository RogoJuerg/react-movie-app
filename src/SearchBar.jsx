import React from "react";
import SearchIcon from './search.svg'

const SearchBar = (props) => {
    return (
        <div className="search">
                <input placeholder="Search for movies"
                    value={props.searchTerm}
                    onChange={(e) => props.setSearchTerm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => props.searchMovies(props.searchTerm)}
                />
            </div>
    )
}

export default SearchBar;