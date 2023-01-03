import PropTypes from 'prop-types';
import { Component } from 'react';
import { GoSearch } from 'react-icons/go';
import { Bar, SearchButton, SearchForm, SearchInput } from './SearchBar.styled';

export class SearchBar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
  };

  state = {
    query: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const { query } = this.state;
    this.props.onSubmit(query);
    this.reset();
    e.target.reset();
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  reset = () => {
    this.setState({ query: '' });
  };

  render() {
    return (
      <Bar>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchButton type="submit">
            <GoSearch size={20} />
          </SearchButton>
          <SearchInput
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="query"
            onChange={this.handleChange}
          />
        </SearchForm>
      </Bar>
    );
  }
}
