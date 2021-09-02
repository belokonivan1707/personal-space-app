import DropDownQuote from 'components/drop-down-quote/drop-down-quote';
import { WritersType, Books, Quotes } from '../../../store/writers/data';
import style from './styles.module.css';

export interface Props {
  props: WritersType;
}

const WriterCard = ({ props }: Props) => {
  const { writer, photo, born, died, books } = props;
  return (
    <div className={style.card}>
      <div className={style.writer}>
        <div style={{ backgroundImage: `url(${photo})` }} className={style.photo}>
          <h3 className={style.name}>{writer}</h3>
        </div>

        <div className={style.description}>
          <p className={style.date}>{born}</p>
          <p className={style.date}>{died}</p>
        </div>
      </div>

      <div className={style.books}>
        {books.map((el: Books) => (
          <div className={style.book} key={el.id}>
            <div className={style.booktitlebox}>
              <h4 className={style.booktitle}>{el.title}</h4>
              <p className={style.bookdate}>{el.date}</p>
            </div>
            <DropDownQuote quote={books[0].quotes[0]} />
            {el.quotes.map((quote: Quotes, index) => {
              return index === 1 ? null : <DropDownQuote key={quote.id} quote={quote} />;
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WriterCard;
