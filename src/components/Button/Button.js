import PropTypes from 'prop-types';
import { ButtonStyled } from './Button.styled';

export const Button = ({ loadMore }) => {
  return <ButtonStyled onClick={loadMore}>Load more</ButtonStyled>;
};

Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
};
