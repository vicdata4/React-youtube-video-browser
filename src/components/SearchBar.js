import React from 'react';

class SearchBar extends React.Component {

    state = { term: '' };

    onInputChange = (event) => {
        this.setState({ term: event.target.value });
    };

    onFormSubmit = (event) => {
        event.preventDefault();

        
    };

    render () {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                <label>Video search</label>
                    <input type="text" value={this.state.term} onChange={this.onInputChange} />
                </form>
            </div>
        );
    }
}


export default SearchBar;