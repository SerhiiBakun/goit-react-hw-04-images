import { Button } from 'components/Button/Button';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { SearchBar } from 'components/Searchbar/Searchbar';
import { Component } from 'react';
import { fetchImg } from 'services/api';
import { AppStyled } from './App.styled';
import { Loader } from 'components/Loader/Loader';
import { Modal } from 'components/Modal/Modal';

export class App extends Component {
  state = {
    page: 1,
    query: '',
    items: [],
    loading: false,
    showModal: false,
    choosedId: '',
  };

  async componentDidUpdate(_, prevState) {
    if (
      prevState.page !== this.state.page ||
      prevState.query !== this.state.query
    ) {
      const { query, page } = this.state;
      this.setState({ loading: true });
      try {
        const response = await fetchImg(query, page);
        this.setState(({ items }) => ({ items: [...items, ...response.hits] }));
      } catch (error) {
        console.log(error);
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  handleSubmit = query => {
    this.setState(prevState => {
      if (prevState.query !== query) {
        return {
          page: 1,
          query: query,
          items: [],
        };
      }
    });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  openModal = id => {
    this.setState({
      showModal: true,
      choosedId: id,
    });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { items, loading, showModal, choosedId } = this.state;
    const chosedItem = items.filter(item => item.id === choosedId)[0];

    return (
      <AppStyled>
        {showModal && <Modal item={chosedItem} closeModal={this.closeModal} />}
        <SearchBar onSubmit={this.handleSubmit} />
        {items.length > 0 && (
          <ImageGallery items={items} openModal={this.openModal} />
        )}
        {loading && <Loader />}
        {items.length > 0 && <Button loadMore={this.loadMore} />}
      </AppStyled>
    );
  }
}
