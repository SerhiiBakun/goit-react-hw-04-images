import PropTypes from 'prop-types';
import { useState } from 'react';
import { GoSearch } from 'react-icons/go';
import { Bar, SearchButton, SearchForm, SearchInput } from './SearchBar.styled';

export function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
    localStorage.setItem('query', JSON.stringify(query));
  };

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'query':
        setQuery(value);
        break;
      default:
        console.log(`Поле з назвою ${name} не обробляється`);
    }
  };

  return (
    <Bar>
      <SearchForm onSubmit={handleSubmit}>
        <SearchButton type="submit">
          <GoSearch size={20} />
        </SearchButton>
        <SearchInput
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="query"
          onChange={handleChange}
        />
      </SearchForm>
    </Bar>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
