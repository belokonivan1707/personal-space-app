import QuoteSvg from '../../assets/quote/left-quote.svg';
import style from './styles.module.css';
import { Quotes } from '../../store/writers/data';

export interface Props {
  quote: Quotes;
}

const DropDownQuote = ({ quote }: Props) => {
  const { body } = quote;

  return (
    <div tabIndex={0} role="button" className={style.wrap}>
      <div className={style.titlebox}>
        <span className={style.quotesvg} style={{ backgroundImage: `url(${QuoteSvg})` }} />
      </div>

      <div className={`${style.dropDown}`}>
        <p className={style.quote}>{body}</p>
      </div>
    </div>
  );
};

export default DropDownQuote;
