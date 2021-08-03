import { useEffect, useState } from 'react';
import Block from '../../components/blocks-game/block/block';
// import style from './styles.module.css';

// interface Props {
//   count: number;
// }

const Blocks = ({ blocks, time }: any) => {
  const [color, setColor] = useState<string>('white');
  const [selectedSequence, setSelectedSequence] = useState<number[] | []>([]);
  console.log('BLOCKS');
  console.log(selectedSequence);

  const selectSequence = (blockId: number) => {
    setSelectedSequence([...selectedSequence, blockId]);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setColor('black');
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (time > 3000) {
    setTimeout(() => {
      setColor('cornsilk');
    }, time);
  }

  return (
    <div>
      {blocks?.map((el: any) => {
        return (
          <Block
            key={el.id}
            id={el.id}
            count={el.linear}
            linear={el.linear}
            color={color}
            handleClick={selectSequence}
          />
        );
      })}
    </div>
  );
};

export default Blocks;
