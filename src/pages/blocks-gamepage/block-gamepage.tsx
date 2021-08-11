import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionSetRandomSequence } from 'store/blocks-game/action';
import Button from 'components/buttons/button/button';
import { BlocksGameState } from 'store/blocks-game/types';
import Blocks from '../../containers/blocks/blocks';
import { ButtonsArray } from './types';
import { RootState } from '../../store/root-reducer';
import style from './styles.module.css';

export interface RandomSequence {
  id: number;
  linear: number;
  color: string;
  userSequenceId: number;
}

export interface LocalState {
  difficult: number;
  score: number;
}

const BlockGamepage = () => {
  const buttonsArray = [
    { id: 3, title: 'Easy' },
    { id: 5, title: 'Medium' },
    { id: 7, title: 'Hard' },
  ];

  const dispatch = useDispatch();
  const { difficult, score }: LocalState = useSelector<RootState, BlocksGameState>(state => state.blocksGame);

  const selectTheDifficulty = useCallback((quantityBlocks: number) => {
    const timeBeforeRemovingColor = quantityBlocks * 1000;
    const blocksQuantity = quantityBlocks;

    const array: RandomSequence[] = [];
    for (let block = 0; block < quantityBlocks; block += 1) {
      array.push({ id: block + 1, linear: block, color: 'white', userSequenceId: 0 });
    }
    array.sort(() => 0.5 - Math.random());

    dispatch(actionSetRandomSequence({ array, timeBeforeRemovingColor, blocksQuantity }));
  }, []);

  return (
    <div className={style.container}>
      <div className={style.titlebox}>
        <h3 className={style.title}>Fucking Block Game</h3>
        <p className={style.score}>
          <span className={style.scorespan}>Your Score: </span>
          {score}
        </p>
      </div>
      <div className={style.difficultySection}>
        {difficult ? (
          <div className={style.gameSection}>
            <Blocks />
          </div>
        ) : (
          <div className={style.difficultyBox}>
            <p className={style.difficultyTitle}> Select the difficulty</p>
            {buttonsArray.map(({ id, title }: ButtonsArray) => (
              <Button key={id} id={id} handleClick={selectTheDifficulty}>
                {title}
              </Button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default React.memo(BlockGamepage);
