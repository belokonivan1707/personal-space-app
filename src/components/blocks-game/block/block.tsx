import React from 'react';
import { useDispatch } from 'react-redux';
import { actionSetUserSequence } from 'store/blocks-game/action';
import { RandomSequence } from 'pages/blocks-gamepage/block-gamepage';
import style from './styles.module.css';

interface Props {
  item: RandomSequence;
}

const Block = ({ item }: Props) => {
  const { id, linear, color } = item;
  const dispatch = useDispatch();

  const hanleClick = () => {
    sendDispatchAndSetCounter(id);
  };

  if (color === 'white') {
    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events
      <div
        className={style.block}
        style={{
          backgroundColor: 'white',
        }}
      >
        {/* <div>{id}</div> */}
      </div>
    );
  }

  const sendDispatchAndSetCounter = (blockId: number) => {
    dispatch(actionSetUserSequence(blockId));
  };

  if (color === 'darkgray') {
    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events
      <div
        className={style.block}
        style={{
          backgroundColor: 'darkgray',
        }}
      >
        {/* <button className={style.button} type="button" onClick={() => sendDispatchAndSetCounter(id)}> */}
        <button className={style.button} type="button" onClick={() => hanleClick()}>
          click
        </button>
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
    />
  );
};

export default React.memo(Block);
