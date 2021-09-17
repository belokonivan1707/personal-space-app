import style from './styles.module.css';

interface Props {
  title: string;
}

const RadioInput = ({ title }: Props) => {
  console.log(title);
  return (
    <div className={style.container}>
      <label className={style.label}>
        <input type="radio" name="cube" value="front" defaultChecked />
        {title}
      </label>
    </div>
  );
};

export default RadioInput;
