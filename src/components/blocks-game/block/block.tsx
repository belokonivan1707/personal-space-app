/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useDispatch } from 'react-redux';
import { actionSetUserSequence } from 'store/blocks-game/action';
import style from './styles.module.css';

interface Props {
  id: number;
  count: number;
  linear: number;
  color: string;
  handleClick: (id: number) => void;
}

const Block = ({ id, linear, color }: any) => {
  const dispatch = useDispatch();
  console.log('block component render');

  if (color === 'white') {
    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events
      <div
        // onClick={() => handleClick(id)}
        className={style.block}
        style={{
          backgroundColor: 'white',
        }}
      >
        <div>{id}</div>
      </div>
    );
  }

  if (color === 'darkgray') {
    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events
      <div
        // onClick={() => handleClick(id)}
        className={style.block}
        style={{
          backgroundColor: 'darkgray',
        }}
      >
        <button type="button" onClick={() => dispatch(actionSetUserSequence(id))}>
          click
        </button>
        <div>{id}</div>
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
      <div>{id}</div>
    </div>
  );
};

export default React.memo(Block);
