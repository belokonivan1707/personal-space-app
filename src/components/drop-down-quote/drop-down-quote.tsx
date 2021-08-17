import { useState } from 'react';
import QuoteSvg from '../../assets/quote/left-quote.svg';
import style from './styles.module.css';
import { Quotes } from '../../store/writers/data';

export interface Props {
  quote: Quotes;
}

const DropDownQuote = ({ quote }: Props) => {
  const { body } = quote;

  const [hideQuote, setHideQuote] = useState(false);
  return (
    <div
      tabIndex={0}
      role="button"
      className={style.wrap}
      onClick={() => setHideQuote(prev => !prev)}
      onKeyPress={() => setHideQuote(prev => !prev)}
    >
      <div className={style.titlebox}>
        <span className={style.quotesvg} style={{ backgroundImage: `url(${QuoteSvg})` }} />
      </div>
      <div className={`${style.quotebox} ${hideQuote === true ? style.dropdown : style.dropup}`}>
        <p className={style.quote}>{body}</p>
      </div>
    </div>
  );
};

export default DropDownQuote;
