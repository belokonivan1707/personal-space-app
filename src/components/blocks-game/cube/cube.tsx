import { useEffect, useState } from 'react';
import style from './styles.module.css';

interface Difficulties {
  id: number;
  title: string;
  chosen: boolean;
}

interface Props {
  props: Difficulties[];
}
const Cube = ({ props }: Props) => {
  const [...item] = props;
  const [cubePosition, setCubePosition] = useState('');

  useEffect(() => {
    item.forEach(el => {
      if (el.id === 3 && el.chosen === true) {
        setCubePosition('rotateX(88deg) translateZ(0px)');
      }
      if (el.id === 5 && el.chosen === true) {
        setCubePosition('rotateZ(-180deg) rotateX(180deg) rotateY(0deg) translateZ(0px)');
      }
      if (el.id === 7 && el.chosen === true) {
        setCubePosition('rotateY(90deg) rotateZ( -360deg)');
      }

      setTimeout(() => {
        setCubePosition('');
      }, 4000);
    });
  }, [props]);

  return (
    <div>
      <section className={style.cube_section}>
        <div className={style.scene}>
          <div className={style.cube} style={{ transform: `${cubePosition}` }}>
            <div className={style.cube_front}>front</div>
            <div className={style.cube_back}>back</div>
            <div className={style.cube_right}>
              <p>Medium</p>
            </div>
            <div className={style.cube_left}>Hard</div>
            <div className={style.cube_top}>top</div>
            <div className={style.cube_bottom}>
              <p>Easy</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cube;
