import RadioInput from '../radio-input/radio-input';
import style from './styles.module.css';

interface Difficulties {
  id: number;
  title: string;
}

interface Props {
  props: Difficulties[];
}
const Cube = ({ props }: Props) => {
  const [...item] = props;

  item.map((el: Difficulties) => {
    console.log(el);
    return null;
  });

  return (
    <div>
      <section className={style.cube_section}>
        <div className={style.scene}>
          <div className={style.cube}>
            <div className={style.cube_front}>front</div>
            <div className={style.cube_back}>back</div>
            <div className={style.cube_right}>right</div>
            <div className={style.cube_left}>left</div>
            <div className={style.cube_top}>top</div>
            <div className={style.cube_bottom}>bottom</div>
          </div>
        </div>
      </section>
      <div className={style.difficultiesSection}>
        {item.map(el => {
          return <RadioInput key={el.id} title={el.title} />;
        })}
      </div>
    </div>
  );
};

export default Cube;
