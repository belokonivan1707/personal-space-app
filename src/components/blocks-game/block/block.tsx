/* eslint-disable jsx-a11y/no-static-element-interactions */
import style from './styles.module.css';

interface Props {
  id: number;
  count: number;
  linear: number;
  color: string;
  handleClick: (id: number) => void;
}

const Block = ({ id, count, linear, color, handleClick }: Props) => {
  console.log('block');
  console.log(id);

  if (color === 'cornsilk') {
    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events
      <div
        onClick={() => handleClick(id)}
        className={style.block}
        style={{
          backgroundColor: 'cornsilk',
        }}
      >
        <div>{count}</div>
      </div>
    );
  }

  return (
    <div
      className={style.block}
      style={{
        backgroundColor: color,
        transition: `background-color 0.1s linear ${linear}s`,
      }}
    >
      <div>{count}</div>
    </div>
  );
};

export default Block;
