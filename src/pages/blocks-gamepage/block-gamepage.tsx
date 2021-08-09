import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { actionSetRandomSequence } from 'store/blocks-game/action';
import Button from 'components/blocks-game/button/button';
import Blocks from '../../containers/blocks/blocks';
import style from './styles.module.css';
import { ButtonsArray } from './types';

const BlockGamepage = () => {
  const buttonsArray = [
    { id: 3, title: 'Easy' },
    { id: 5, title: 'Medium' },
    { id: 7, title: 'Hard' },
  ];
  const dispatch = useDispatch();
  const [difficulty, setDifficulty] = useState<number>(0);

  const selectTheDifficulty = useCallback((id: any) => {
    const timeBeforeRemovingColor = id * 1000;
    setDifficulty(id);

    const array: any = [];
    for (let block = 0; block < id; block += 1) {
      array.push({ id: block, linear: block, color: 'white' });
    }
    array.sort(() => 0.5 - Math.random());

    dispatch(actionSetRandomSequence({ array, timeBeforeRemovingColor }));
  }, []);

  console.log('BlockGamepage');

  return (
    <div className={style.container}>
      <div className={style.titlebox}>
        <h3 className={style.title}>Fucking Block Game</h3>
      </div>
      <div className={style.difficultySection}>
        {difficulty ? null : (
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
      <div className={style.gameSection}>{difficulty ? <Blocks /> : null}</div>
    </div>
  );
};

export default React.memo(BlockGamepage);
