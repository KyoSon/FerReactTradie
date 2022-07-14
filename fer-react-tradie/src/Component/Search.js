import { MdSearch } from 'react-icons/md'
import { useState, useContext } from 'react';
import { AppContext } from '../App';

const Search = () => {
    const { searchText, setSearchText } = useContext(AppContext)
    return (
        <div className="container search">
            <MdSearch className='search-icon' size='1.3em' />
            <input
                onChange={(e) => setSearchText(e.target.value)}
                type='text'
                value={searchText}
                placeholder='type to filter jobs...'
            />
        </div>
    );
}

export default Search;