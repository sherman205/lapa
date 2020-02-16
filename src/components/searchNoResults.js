import React, { Component } from 'react';
import { navigate } from 'gatsby-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './styles/searchNoResults.scss';

class SearchNoResults extends Component {
    state = {
        searchString: ""
    }

	handleChange = () => {
	    this.setState({
	    	searchString: this.refs.search.value
	    });
	}

	clearForm = () => {
		this.setState({
			searchString: ""
		});
		this.refs.search.focus();
	}

	onSearch = (e) => {
		e.preventDefault();
		if (this.state.searchString !== "") {
			this.setState({
				searchString: this.state.searchString.replace(/\s+/g, '-')
			}, () => navigate(`/results/${this.state.searchString}`));
		}
	}

	render() {
		return (
			<div>
				<form className="search-form" onSubmit={this.onSearch}>
					<input 
					className="search-bar"
					id="search"
					type="text"
					value={this.state.searchString}
					ref="search"
					onChange={this.handleChange}
					placeholder="Search for something"
					/>
					<FontAwesomeIcon className="search-icon" icon={faSearch} onClick={this.onSearch} />
				</form>
			</div>

		);
	}
}

export default SearchNoResults;
