import { ButtonStyled } from './Button.styled';

export const Button = ({ loadMore }) => {
  return <ButtonStyled onClick={loadMore}>Load more</ButtonStyled>;
};
