import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionChangeColorInSequenseToBlack, actionChangeColorInSequenseToDarkgray } from 'store/blocks-game/action';
import Block from '../../components/blocks-game/block/block';
// import style from './styles.module.css';

// interface Props {
//   blocks: any;
//   time: any;
//   handleClickChangeColor: (id: any) => void;
// }

const Blocks = () => {
  const dispatch = useDispatch();
  const [check, setCheck] = useState(false);
  const { randomSequence, time, colorChanged }: any = useSelector<any, any>(state => state.blocksGame);
  console.log('blocks component render');

  useEffect(() => {
    console.log('dispatch make color black');
    const timer = setTimeout(() => {
      dispatch(actionChangeColorInSequenseToBlack());
      setCheck(true);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    console.log('dispatch make color gray');
    const timer = setTimeout(() => {
      dispatch(actionChangeColorInSequenseToDarkgray());
    }, time);

    return () => {
      clearTimeout(timer);
    };
  }, [check]);

  return (
    <div>
      {randomSequence?.map((el: any) => {
        return (
          <Block
            key={el.id}
            id={el.id}
            linear={el.linear}
            color={el.color}
            // handleClick={selectSequence}
          />
        );
      })}
    </div>
  );
};

export default Blocks;
