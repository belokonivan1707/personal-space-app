import { useState } from 'react';
import Button from 'components/blocks-game/button/button';
import Blocks from '../../containers/blocks/blocks';
// import Block from '../../components/blocks-game/block/block';
import style from './styles.module.css';
import { ButtonsArray } from './types';

const BlockGamepage = () => {
  const buttonsArray = [
    { id: 3, title: 'Easy' },
    { id: 5, title: 'Medium' },
    { id: 7, title: 'Hard' },
  ];

  const [difficulty, setDifficulty] = useState<number>(0);
  const [blocks, setBlocks] = useState<any>([]);
  const [timer, setTimer] = useState<number>(0);

  const selectTheDifficulty = (id: number) => {
    const localTimer = (id + 1) * 1000;
    setDifficulty(id);
    setTimer(localTimer);

    const array: any = [];
    for (let block = 0; block < id; block += 1) {
      array.push({ id: block, linear: block, color: 'white' });
    }

    array.sort(() => 0.5 - Math.random());
    setBlocks(array);
  };

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
      <div className={style.gameSection}>
        {/* {blocks.map((el: any) => {
          return <Block key={el.id} count={el.linear} color={el.color} linear={el.linear} time={difficulty} />;
        })} */}
      </div>
      <div className={style.gameSection}>{blocks ? <Blocks blocks={blocks} time={timer} /> : null}</div>
    </div>
  );
};

export default BlockGamepage;
