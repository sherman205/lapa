import React, { Component } from 'react';
import { navigate } from 'gatsby-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './styles/search.scss';

export default class Search extends Component {
	constructor(props) {
		super(props);
		const width = typeof window !== `undefined` ? window.innerWidth : null;
		this.state = {
			searchString: "",
      visible: 'hide',
			width: width
		};
	};

	componentDidMount() {
		document.addEventListener("keydown", this.escFunction, false);
	}

	componentWillUnmount() {
		document.removeEventListener("keydown", this.escFunction, false);
	}

	escFunction = (event) => {
		if (event.keyCode === 27) {
			if (this.state.visible === 'show') {
				this.setState({
					visible: 'hide'
				});
				document.body.classList.remove("noScroll");

			}
		}
	}

	toggleMenu = () => {
		if (this.state.visible === 'show') {
			this.setState({
				visible: 'hide'
			});
			document.body.classList.remove("noScroll");
		}
		if (this.state.visible === 'hide') {
			this.setState({
				visible: 'show'
			}); 
			document.body.classList.add("noScroll");
			if (this.state.width > 650){
				this.refs.search.focus();
			}
		}
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
		document.body.style.overflow = "auto";
		this.setState({
			visible: 'hide',
			searchString: this.state.searchString.replace(/\s+/g, '-')
		}, () => navigate(`/results/${this.state.searchString}`));
	}

	render() {
		return (
			<div>
				<FontAwesomeIcon className="search-icon" icon={faSearch} onClick={this.toggleMenu} />
				<form className={`search-mobile-form ${this.state.visible}`} onSubmit={this.onSearch}>
					<FontAwesomeIcon className="close" icon={faTimes} onClick={this.toggleMenu} />
					<div className="search-container">
						<h1>Discover</h1>
						<input id="search" 
							type="text"
							value={this.state.searchString}
							ref="search"
							onChange={this.handleChange}
							placeholder="Search for something" />
					</div>
				</form>
			</div>

		);
	}
}
