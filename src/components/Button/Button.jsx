
import css from './Button.module.css';

export const Button = ({addNextPage}) => {
  return (
    <button className={css.button} onClick={addNextPage}>
      Load more
    </button>
  );
};

