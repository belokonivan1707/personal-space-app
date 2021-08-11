import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  actionChangeColorInSequenseToBlack,
  actionChangeColorInSequenseToDarkgray,
  actionCheckUserSequence,
  actionReloadGame,
} from 'store/blocks-game/action';
import { RootState } from 'store/root-reducer';
import { RandomSequence } from 'pages/blocks-gamepage/block-gamepage';
import Block from '../../components/blocks-game/block/block';

export interface LocalState {
  randomSequence: RandomSequence[];
  time: number;
  moveCounter: number;
  difficult: number;
  win: unknown | boolean;
  userStep: number;
}

const Blocks = () => {
  const dispatch = useDispatch();
  const [check, setCheck] = useState(false);
  const { randomSequence, time, moveCounter, difficult, win }: LocalState = useSelector<RootState, LocalState>(
    state => state.blocksGame
  );

  useEffect(() => {
    if (moveCounter === difficult) {
      dispatch(actionCheckUserSequence());
    }
  }, [moveCounter]);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(actionChangeColorInSequenseToBlack());
      setCheck(true);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(actionChangeColorInSequenseToDarkgray());
    }, time);

    return () => {
      clearTimeout(timer);
    };
  }, [check]);

  if (win) {
    return (
      <div>
        you are win
        <button type="button" onClick={() => dispatch(actionReloadGame())}>
          try again
        </button>
      </div>
    );
  }

  if (win === false) {
    return <div>you are lose</div>;
  }

  return (
    <div>
      {randomSequence?.map((el: RandomSequence) => {
        return <Block key={el.id} item={el} />;
      })}
    </div>
  );
};

export default Blocks;
