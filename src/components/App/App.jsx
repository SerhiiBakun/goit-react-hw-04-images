import { Button } from 'components/Button/Button';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { SearchBar } from 'components/Searchbar/Searchbar';
import { useState, useEffect } from 'react';
import { fetchImg } from 'services/api';
import { AppStyled } from './App.styled';
import { Loader } from 'components/Loader/Loader';
import { Modal } from 'components/Modal/Modal';

export function App() {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [items, setItems] = useState([]);
  const [laoding, setLoading] = useState(false);
  const [showModal, setShowModal] = useState();
  const [choosedId, setChoosedId] = useState('');

  useEffect(() => {
    if (!query) {
      return;
    }
    setLoading(true);
    const fetch = async () => {
      try {
        const response = await fetchImg(query, page);
        setItems(items => [...items, ...response.hits]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, [page, query]);

  const handleSubmit = query => {
    setQuery(prevQuery => {
      if (prevQuery !== query) {
        setPage(1);
        setQuery(query);
        setItems([]);
      }
    });
  };

  const openModal = id => {
    setShowModal(true);
    setChoosedId(id);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const loadMore = () => {
    setPage(page => page + 1);
  };

  const chosedItem = items.filter(item => item.id === choosedId)[0];

  return (
    <AppStyled>
      {showModal && <Modal item={chosedItem} closeModal={closeModal} />}
      <SearchBar onSubmit={handleSubmit} />
      {items.length > 0 && <ImageGallery items={items} openModal={openModal} />}
      {laoding && <Loader />}
      {items.length > 0 && <Button loadMore={loadMore} />}
    </AppStyled>
  );
}
