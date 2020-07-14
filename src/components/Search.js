import React, { Component } from 'react';

class Search extends Component {
    state = {
        text: '',
    }

    handleChange = (e) => {
        this.setState({ text: e.target.value })
    }

    handleSubmit = (e) => {
        const { onSearch } = this.props;
        const { text } = this.state;
        e.preventDefault();
        onSearch(text)
    }

    render() {
        console.log(this.state)
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.handleChange} />
                <input type="submit" value="Search!"/>
            </form>
        )
    }
}

export default Search;