import React, { useState } from 'react';

const Search = ({ onSearch }) => {

    const [text, setText] = useState('')
    
    
    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(text)
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} />
            <input type="submit" value="Search!"/>
        </form>
    )
}

export default Search;